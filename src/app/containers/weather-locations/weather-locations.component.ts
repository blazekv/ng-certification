import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../+state/reducers';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../+state/actions/weather/weather.actions';
import { Observable } from 'rxjs';
import { WEATHER_SELECTORS } from '../../+state/selectors/weather.selectors';
import { Weather } from '../../model/weather';

@Component({
  selector: 'app-weather-locations',
  templateUrl: './weather-locations.component.html',
  styleUrls: ['./weather-locations.component.scss'],
})
export class WeatherLocationsComponent implements OnInit {
  weatherLocations$: Observable<Weather[]> = this.store.select(WEATHER_SELECTORS.weatherLocations);

  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}

  onAddLocation(zipCode: string) {
    this.store.dispatch(WEATHER_ACTIONS.addWeatherLocation({ zipCode }));
  }
}
