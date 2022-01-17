import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { MessageEffects } from './message.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { provideMockActions } from '@ngrx/effects/testing';

describe('MessageEffects', () => {
  let actions$: Observable<any>;
  let effects: MessageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [MessageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(MessageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
