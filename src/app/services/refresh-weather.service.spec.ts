import { TestBed } from '@angular/core/testing';

import { RefreshWeatherService } from './refresh-weather.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('RefreshWeatherService', () => {
  let service: RefreshWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });
    service = TestBed.inject(RefreshWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
