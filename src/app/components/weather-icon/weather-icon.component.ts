import { Component, OnInit } from '@angular/core';
import { WeatherConditionComponent } from '../weather-condition/weather-condition.component';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
})
export class WeatherIconComponent extends WeatherConditionComponent implements OnInit {
  ngOnInit(): void {}
}
