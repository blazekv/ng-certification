import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationsComponent } from './weather-locations.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../+state/actions/weather/weather.actions';

describe('WeatherLocationsComponent', () => {
  let component: WeatherLocationsComponent;
  let fixture: ComponentFixture<WeatherLocationsComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            weather: {},
          },
        }),
      ],
      declarations: [WeatherLocationsComponent],
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
    const spy = spyOn(store, 'dispatch');
    component.onAddLocation(zipCode);
    expect(spy).toHaveBeenCalledWith(WEATHER_ACTIONS.addWeatherLocation({ zipCode }));
  });

  it('should dispatch action onRemoveLocation', () => {
    const zipCode = '55555';
    const spy = spyOn(store, 'dispatch');
    component.onRemoveLocation(zipCode);
    expect(spy).toHaveBeenCalledWith(WEATHER_ACTIONS.removeWeatherLocation({ zipCode }));
  });
});
