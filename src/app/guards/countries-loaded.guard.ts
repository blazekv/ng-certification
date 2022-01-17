import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CoreModuleState } from '../+state/reducers';
import { COUNTRY_ACTIONS } from '../+state/actions/country/country.actions';
import { COUNTRY_SELECTORS } from '../+state/selectors/country.selectors';

@Injectable({
  providedIn: 'root',
})
export class CountriesLoadedGuard implements CanActivate {
  constructor(private store: Store<CoreModuleState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.store.dispatch(COUNTRY_ACTIONS.loadCountries());
    return this.checkStore();
  }

  private checkStore(
    booleanObservable: Observable<boolean> = this.store.select(COUNTRY_SELECTORS.countries).pipe(
      filter(countries => !!countries && countries.length > 0),
      take(1),
      mapTo(true)
    )
  ) {
    return booleanObservable;
  }
}
