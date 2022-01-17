import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ButtonState } from '../../model/button-state';
import { delay, endWith, filter, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-working-button',
  templateUrl: './working-button.component.html',
  styleUrls: ['./working-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkingButtonComponent implements OnInit {
  @Input() initButton?: TemplateRef<any>;
  @Input() processingButton?: TemplateRef<any>;
  @Input() successButton?: TemplateRef<any>;
  @Input() errorButton?: TemplateRef<any>;

  @Input()
  set state$(state$: Observable<ButtonState> | undefined) {
    if (state$) {
      state$
        .pipe(
          untilDestroyed(this),
          endWith(ButtonState.SUCCESS),
          tap(state => this.setupState(state)),
          filter(state => state === ButtonState.SUCCESS || state == ButtonState.ERROR),
          delay(500),
          tap(() => this.setupState(ButtonState.INIT))
        )
        .subscribe();
    }
  }

  state: ButtonState = ButtonState.INIT;
  currentTemplate: TemplateRef<any> | null = null;
  ButtonState = ButtonState;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  private setupState(state: ButtonState) {
    this.state = state;
    this.cd.markForCheck();
  }
}
