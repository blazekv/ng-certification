import { createAction, props } from '@ngrx/store';

export const MESSAGE_ACTIONS = {
  success: createAction('[Message] Show success message', props<{ message: string; title?: string }>()),
  warning: createAction('[Message] Show warning message', props<{ message: string; title?: string }>()),
  error: createAction('[Message] Show error message', props<{ message: string; title?: string }>()),
};
