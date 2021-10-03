import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationsComponent } from './weather-locations.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../+state/actions/weather/weather.actions';
import { AddLocationComponent } from '../../components/add-location/add-location.component';
import { CurrentWeatherComponent } from '../../components/current-weather/current-weather.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { WeatherConditionComponent } from '../../components/weather-condition/weather-condition.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('WeatherLocationsComponent', () => {
  let component: WeatherLocationsComponent;
  let fixture: ComponentFixture<WeatherLocationsComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            weather: {},
          },
        }),
      ],
      declarations: [
        WeatherLocationsComponent,
        AddLocationComponent,
        WeatherConditionComponent,
        CurrentWeatherComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action onAddLocation', () => {
    const zipCode = '55555';
    const spy = jest.spyOn(store, 'dispatch');
    component.onAddLocation(zipCode);
    expect(spy).toHaveBeenCalledWith(WEATHER_ACTIONS.addWeatherLocation({ zipCode }));
  });

  it('should dispatch action onRemoveLocation', () => {
    const zipCode = '55555';
    const spy = jest.spyOn(store, 'dispatch');
    component.onRemoveLocation(zipCode);
    expect(spy).toHaveBeenCalledWith(WEATHER_ACTIONS.removeWeatherLocation({ zipCode }));
  });
});
