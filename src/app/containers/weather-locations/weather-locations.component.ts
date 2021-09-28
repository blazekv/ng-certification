import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../+state/reducers';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../+state/actions/weather/weather.actions';
import { Observable } from 'rxjs';
import { WEATHER_SELECTORS } from '../../+state/selectors/weather.selectors';

@Component({
  selector: 'app-weather-locations',
  templateUrl: './weather-locations.component.html',
  styleUrls: ['./weather-locations.component.scss'],
})
export class WeatherLocationsComponent implements OnInit {
  zipCodes$: Observable<string[]> = this.store.select(WEATHER_SELECTORS.zipCodes);

  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}

  onAddLocation(zipCode: string) {
    this.store.dispatch(WEATHER_ACTIONS.addLocation({ zipCode }));
  }
}
