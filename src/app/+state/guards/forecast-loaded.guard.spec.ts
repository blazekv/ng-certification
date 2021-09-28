import { TestBed } from '@angular/core/testing';

import { ForecastLoadedGuard } from './forecast-loaded.guard';

describe('ForecastLoadedGuard', () => {
  let guard: ForecastLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForecastLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
