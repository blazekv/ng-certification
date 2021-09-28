import { TestBed } from '@angular/core/testing';

import { AppKeyInterceptor } from './app-key.interceptor';

describe('AppKeyInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppKeyInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppKeyInterceptor = TestBed.inject(AppKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
