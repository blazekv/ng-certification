import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconComponent } from './weather-icon.component';
import { IconPipe } from '../../pipes/icon.pipe';

describe('WeatherIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherIconComponent, IconPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
