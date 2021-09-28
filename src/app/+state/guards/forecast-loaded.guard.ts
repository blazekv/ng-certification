import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModuleState } from '../reducers';
import { Store } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../actions/weather/weather.actions';
import { WEATHER_SELECTORS } from '../selectors/weather.selectors';
import { filter, map, mapTo, take, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ForecastLoadedGuard implements CanActivate {
  constructor(private store: Store<CoreModuleState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const zipCode = route.paramMap.get('zipcode') || '';
    this.store.dispatch(WEATHER_ACTIONS.loadForecast({ zipCode }));
    return this.checkStore(zipCode);
  }

  private checkStore(zipCode: string) {
    return this.store.select(WEATHER_SELECTORS.forecastLoadingFinished).pipe(
      withLatestFrom(this.store.select(WEATHER_SELECTORS.selectedForecastZipCode)),
      filter(([finished]) => finished),
      map(([, storedZipCode]) => {
        if (storedZipCode === zipCode) {
          return true;
        } else {
          return this.router.createUrlTree(['/404']);
        }
      }),
      take(1)
    );
  }
}
