import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationComponent } from './add-location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddLocationComponent', () => {
  let component: AddLocationComponent;
  let fixture: ComponentFixture<AddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCardModule, MatInputModule, NoopAnimationsModule],
      declarations: [AddLocationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addLocation if form is valid', () => {
    const zipCode = '16000';
    const spy = jest.spyOn(component.addLocation, 'emit');
    component.form.patchValue({ zipCode });
    component.submitLocation();
    expect(spy).toHaveBeenCalledWith(zipCode);
  });

  it('should not emit addLocation if form is invalid', () => {
    const zipCode = '160';
    const spy = jest.spyOn(component.addLocation, 'emit');
    component.form.patchValue({ zipCode });
    component.submitLocation();
    expect(spy).not.toHaveBeenCalledWith(zipCode);
  });
});
