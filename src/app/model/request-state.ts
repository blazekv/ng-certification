import { ButtonState } from '../modules/basic-ui/model/button-state';

export enum RequestState {
  DEFAULT,
  PROCESSING,
  SUCCESS,
  ERROR,
}

export const toButtonState = (requestState: RequestState) => {
  if (requestState === RequestState.DEFAULT) {
    return ButtonState.INIT;
  } else if (requestState === RequestState.PROCESSING) {
    return ButtonState.PROCESSING;
  } else if (requestState === RequestState.SUCCESS) {
    return ButtonState.SUCCESS;
  } else {
    return ButtonState.ERROR;
  }
};
