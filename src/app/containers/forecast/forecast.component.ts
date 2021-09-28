import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../../model/forecast';
import { CoreModuleState } from '../../+state/reducers';
import { Store } from '@ngrx/store';
import { WEATHER_SELECTORS } from '../../+state/selectors/weather.selectors';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<Forecast | undefined> = this.store.select(WEATHER_SELECTORS.forecast);
  zipCode$: Observable<string | undefined> = this.store.select(
    WEATHER_SELECTORS.selectedForecastZipCode
  );

  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}
}
