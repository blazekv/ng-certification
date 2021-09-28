import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Forecast } from '../../model/forecast';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationForecastComponent implements OnInit {
  @Input()
  forecast?: Forecast;

  @Input()
  zipCode?: string | null;

  readonly displayedColumns = ['day', 'condition', 'min', 'max', 'icon'];

  constructor() {}

  ngOnInit(): void {}
}
