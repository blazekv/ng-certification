import { TestBed } from '@angular/core/testing';

import { ForecastLoadedGuard } from './forecast-loaded.guard';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { cold } from 'jasmine-marbles';

describe('ForecastLoadedGuard', () => {
  let guard: ForecastLoadedGuard;
  let store: MockStore;
  let router: Router;
  let routeSnapshot: ActivatedRouteSnapshot;
  let stateSnapshot: RouterStateSnapshot;
  const unloadedState = {
    weather: {},
  };

  const loadedState = {
    weather: {
      selectedForecast: {
        forecast: {},
        zipCode: '12354',
      },
      forecastLoadingFinished: true,
    },
  };

  const loadedStateDifferentZip = {
    weather: {
      selectedForecast: {
        forecast: {},
        zipCode: '124',
      },
      forecastLoadingFinished: true,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        ForecastLoadedGuard,
        provideMockStore({ initialState: loadedState }),
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            paramMap: new Map(Object.entries({ zipcode: '12354' })),
          },
        },
        {
          provide: RouterStateSnapshot,
          useValue: {},
        },
      ],
    });
    guard = TestBed.inject(ForecastLoadedGuard);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    routeSnapshot = TestBed.inject(ActivatedRouteSnapshot);
    stateSnapshot = TestBed.inject(RouterStateSnapshot);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be active if forecast is not loaded', () => {
    store.setState(unloadedState);
    const expected = cold('()');

    expect(guard.canActivate(routeSnapshot, stateSnapshot)).toBeObservable(expected);
  });

  it('should be active if forecast is loaded', () => {
    store.setState(loadedState);
    const expected = cold('(a|)', { a: true });

    expect(guard.canActivate(routeSnapshot, stateSnapshot)).toBeObservable(expected);
  });

  it('should be active if forecast is loaded', () => {
    store.setState(loadedStateDifferentZip);
    const expected = cold('(a|)', { a: router.createUrlTree(['/404']) });

    expect(guard.canActivate(routeSnapshot, stateSnapshot)).toBeObservable(expected);
  });
});
