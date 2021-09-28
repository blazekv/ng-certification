import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import { WEATHER_ACTIONS } from '../actions/weather/weather.actions';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  addWeatherLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WEATHER_ACTIONS.addWeatherLocation),
      switchMap(({ zipCode }) => {
        return this.weatherService.getWeatherByZipCode(zipCode).pipe(
          map(weather => WEATHER_ACTIONS.addWeatherLocationSuccess({ zipCode, weather })),
          catchError((error: any) => of(WEATHER_ACTIONS.addWeatherLocationFailure({ error })))
        );
      })
    );
  });
}
