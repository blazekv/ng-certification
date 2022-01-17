import { TestBed } from '@angular/core/testing';

import { RefreshWeatherService } from './refresh-weather.service';

describe('RefreshWeatherService', () => {
  let service: RefreshWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
