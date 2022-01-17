import { TestBed } from '@angular/core/testing';

import { CountriesLoadedGuard } from './countries-loaded.guard';

describe('CountriesLoadedGuard', () => {
  let guard: CountriesLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CountriesLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
