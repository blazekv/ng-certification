import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RouterStateUrl } from './router/router.reducers';
import { weatherFeatureKey, weatherInitialState, weatherReducer, WeatherState } from './weather/weather.reducer';

export interface CoreModuleState {
  router: RouterReducerState<RouterStateUrl>;
  [weatherFeatureKey]: WeatherState;
}

export const coreReducers: ActionReducerMap<CoreModuleState> = {
  router: routerReducer,
  [weatherFeatureKey]: weatherReducer,
};

export const coreModuleInitialState: CoreModuleState = {
  router: { state: { url: '', queryParams: {}, params: {} }, navigationId: 0 },
  [weatherFeatureKey]: weatherInitialState,
};

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getWeatherState = createFeatureSelector<WeatherState>(weatherFeatureKey);
