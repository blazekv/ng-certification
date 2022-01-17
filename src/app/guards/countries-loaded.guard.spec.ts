import { TestBed } from '@angular/core/testing';

import { CountriesLoadedGuard } from './countries-loaded.guard';
import { provideMockStore } from '@ngrx/store/testing';

describe('CountriesLoadedGuard', () => {
  let guard: CountriesLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: {} })],
    });
    guard = TestBed.inject(CountriesLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
