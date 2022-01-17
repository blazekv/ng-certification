import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../+state/reducers';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../+state/actions/weather/weather.actions';
import { Observable, of } from 'rxjs';
import { WEATHER_SELECTORS } from '../../+state/selectors/weather.selectors';
import { Weather } from '../../model/weather';
import { filter, map } from 'rxjs/operators';
import { RefreshWeatherService } from '@services/refresh-weather.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from '../../../environments/environment';
import { ButtonState } from '../../modules/button-ui/model/button-state';
import { toButtonState } from '../../model/request-state';

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
