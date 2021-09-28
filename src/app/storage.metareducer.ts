import { Action, ActionReducer } from '@ngrx/store';

interface StorageConfig {
  storage: Storage;
  stores: {
    [index: string]: {
      includeKeys?: string[];
      storage?: Storage;
    };
  };
}

export function storageMetaReducer<S, A extends Action = Action>(config: StorageConfig) {
  let onInit = true;
  return function (reducer: ActionReducer<S, A>) {
    return function (state: S, action: A): S {
      const nextState = reducer(state, action);
      if (onInit) {
        onInit = false;
        const savedState = loadFromStorage(config);
        return stateMerger(nextState, savedState);
      }
      saveToStorage(config, nextState);

      return nextState;
    };
  };
}

function loadFromStorage(config: StorageConfig) {
  const rehydratedState: { [index: string]: any } = {};
  for (const storeKey of Object.keys(config.stores)) {
    const storage = config.stores[storeKey].storage || config.storage;
    const jsonStore = storage.getItem(storeKey);
    if (jsonStore) {
      rehydratedState[storeKey] = JSON.parse(jsonStore);
    }
  }
  return rehydratedState;
}

function saveToStorage(config: StorageConfig, nextState: any) {
  for (const storeKey of Object.keys(config.stores)) {
    if (!!nextState[storeKey]) {
      const storage = config.stores[storeKey].storage || config.storage;
      const includeKeys = config.stores[storeKey].includeKeys || [];
      const stateToSave = extractSlice(nextState[storeKey], includeKeys);
      storage.setItem(storeKey, JSON.stringify(stateToSave));
    }
  }
}

function extractSlice(object: any, paths: string[]) {
  let temp = {};
  if (paths.length > 0) {
    for (const path of paths) {
      const value = extractValue(object, path);
      saveValueToObject(temp, path, value);
    }
  } else {
    temp = { ...object };
  }

  return temp;
}

function extractValue(object: any, path: string) {
  const pathParts = path.split('.');
  for (let i = 0; i < pathParts.length; i++) {
    object = object[pathParts[i]];
  }
  return object;
}

function saveValueToObject(object: any, path: string, value: any) {
  const pathParts = path.split('.');
  for (let i = 0; i < pathParts.length - 1; i++) {
    if (!(pathParts[i] in object)) {
      object[pathParts[i]] = {};
    }
    object = object[pathParts[i]];
  }
  object[pathParts[pathParts.length - 1]] = value instanceof Object ? { ...value } : value;
  return object;
}

function stateMerger(state: any, rehydratedState: any) {
  let finalRehydratedState: any = {};
  for (const moduleKey of Object.keys(rehydratedState)) {
    finalRehydratedState[moduleKey] = mergeDeep({ ...state[moduleKey] }, rehydratedState[moduleKey]);
  }

  return { ...state, ...finalRehydratedState };
}

function mergeDeep(target: any, source: any) {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (
      isObject(targetValue) &&
      isObject(sourceValue) &&
      (!Array.isArray(targetValue) || !Array.isArray(sourceValue))
    ) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}
