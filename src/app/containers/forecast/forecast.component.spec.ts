import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationForecastComponent } from '../../components/location-forecast/location-forecast.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { WeatherConditionComponent } from '../../components/weather-condition/weather-condition.component';
import { WeatherIconComponent } from '../../components/weather-icon/weather-icon.component';
import { IconPipe } from '../../pipes/icon.pipe';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatTableModule],
      declarations: [
        ForecastComponent,
        LocationForecastComponent,
        WeatherConditionComponent,
        WeatherIconComponent,
        IconPipe,
      ],
      providers: [
        provideMockStore({
          initialState: {
            weather: {},
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
