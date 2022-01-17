import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';
import { WEATHER_SELECTORS } from '../+state/selectors/weather.selectors';
import { WEATHER_ACTIONS } from '../+state/actions/weather/weather.actions';

@Injectable({
  providedIn: 'root',
})
export class RefreshWeatherService {
  constructor(private store: Store) {}

  startRefresh(refreshTimeInSeconds: number): Observable<string[]> {
    return refreshTimeInSeconds > 0
      ? timer(0, refreshTimeInSeconds * 1000).pipe(
          withLatestFrom(this.store.select(WEATHER_SELECTORS.zipCodes)),
          map(([, codes]) => codes),
          tap(zipCodes => {
            this.store.dispatch(WEATHER_ACTIONS.reloadWeatherLocations({ zipCodes }));
          })
        )
      : of([]);
  }
}
