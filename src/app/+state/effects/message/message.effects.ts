import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { MESSAGE_ACTIONS } from '../../actions/message/message.actions';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions, private toastr: ToastrService) {}

  successMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MESSAGE_ACTIONS.success),
        tap(({ title, message }) => this.toastr.success(message, title))
      );
    },
    { dispatch: false }
  );

  warningMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MESSAGE_ACTIONS.warning),
        tap(({ title, message }) => this.toastr.warning(message, title))
      );
    },
    { dispatch: false }
  );

  errorMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MESSAGE_ACTIONS.error),
        tap(({ title, message }) => this.toastr.error(message, title))
      );
    },
    { dispatch: false }
  );
}
