import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationForecastComponent } from './location-forecast.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { WeatherConditionComponent } from '../weather-condition/weather-condition.component';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { IconPipe } from '../../pipes/icon.pipe';

describe('LocationForecastComponent', () => {
  let component: LocationForecastComponent;
  let fixture: ComponentFixture<LocationForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatCardModule],
      declarations: [
        LocationForecastComponent,
        WeatherConditionComponent,
        WeatherIconComponent,
        IconPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
