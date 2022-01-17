import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../+state/reducers';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../+state/actions/weather/weather.actions';
import { Observable } from 'rxjs';
import { WEATHER_SELECTORS } from '../../+state/selectors/weather.selectors';
import { Weather } from '../../model/weather';
import { filter, map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from '../../../environments/environment';
import { toButtonState } from '../../model/request-state';
import { ButtonState } from '../../modules/basic-ui/model/button-state';
import { COUNTRY_SELECTORS } from '../../+state/selectors/country.selectors';
import { Country } from '../../model/country';
import { RefreshWeatherService } from '../../services/refresh-weather.service';

@UntilDestroy()
@Component({
  selector: 'app-weather-locations',
  templateUrl: './weather-locations.component.html',
  styleUrls: ['./weather-locations.component.scss'],
})
export class WeatherLocationsComponent implements OnInit {
  weatherLocations$: Observable<Map<string, Weather>> = this.store
    .select(WEATHER_SELECTORS.weatherLocations)
    .pipe(
      filter(data => !!data),
      map(data => new Map(Object.entries(data)))
    );

  addingState$: Observable<ButtonState> = this.store
    .select(WEATHER_SELECTORS.forecastAdding)
    .pipe(map(requestState => toButtonState(requestState)));

  countries$: Observable<Country[]> = this.store.select(COUNTRY_SELECTORS.countries);

  constructor(
    private store: Store<CoreModuleState>,
    private refreshWeatherService: RefreshWeatherService
  ) {
    this.refreshWeatherService
      .startRefresh(environment.refreshInterval)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  ngOnInit(): void {}

  onAddLocation(zipCode: string) {
    this.store.dispatch(WEATHER_ACTIONS.addWeatherLocation({ zipCode }));
  }

  onRemoveLocation(zipCode: string) {
    this.store.dispatch(WEATHER_ACTIONS.removeWeatherLocation({ zipCode }));
  }
}
