import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ButtonState } from '../../modules/basic-ui/model/button-state';
import { Country } from '../../model/country';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLocationComponent implements OnInit {
  form: FormGroup;

  @Input()
  countries: Country[] | null = [];
  @Input()
  addingState$?: Observable<ButtonState>;
  @Output()
  addLocation: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {}

  submitLocation() {
    if (this.form.valid) {
      const zipCode = `${this.form.value.zipCode},${this.form.value.countryCode}`;
      this.addLocation.emit(zipCode);
    }
  }

  private createForm() {
    return this.fb.group({
      zipCode: ['', [Validators.required, Validators.minLength(4)]],
      countryCode: ['', [Validators.required]],
    });
  }
}
