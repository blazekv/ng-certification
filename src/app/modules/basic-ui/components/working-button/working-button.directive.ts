import { Directive } from '@angular/core';

@Directive({
  selector: '[initButton]',
})
export class InitButtonDirective {}

@Directive({
  selector: '[processingButton]',
})
export class ProcessingButtonDirective {}

@Directive({
  selector: '[doneButton]',
})
export class DoneButtonDirective {}

@Directive({
  selector: '[errorButton]',
})
export class ErrorButtonDirective {}
