import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLocationComponent implements OnInit {
  form: FormGroup;

  @Output()
  addLocation: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {}

  submitLocation() {
    if (this.form.valid) {
      this.addLocation.emit(this.form.value.zipCode);
    }
  }

  private createForm() {
    return this.fb.group({
      zipCode: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
