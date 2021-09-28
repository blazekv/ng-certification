import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionComponent } from './weather-condition.component';

describe('WeatherConditionComponent', () => {
  let component: WeatherConditionComponent;
  let fixture: ComponentFixture<WeatherConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherConditionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
