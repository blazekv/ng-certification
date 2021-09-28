import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      providers: [
        provideMockStore({
          initialState: {
            weather: {},
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
