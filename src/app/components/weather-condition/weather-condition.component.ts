import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from '../../model/weather';

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherConditionComponent implements OnInit {
  @Input()
  set weather(weather: WeatherItem[]) {
    if (weather && weather.length > 0) {
      this.weatherItem = weather[0];
    }
  }

  weatherItem?: WeatherItem;

  constructor() {}

  ngOnInit(): void {}
}
