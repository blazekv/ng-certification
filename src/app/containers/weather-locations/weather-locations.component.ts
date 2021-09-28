import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-locations',
  templateUrl: './weather-locations.component.html',
  styleUrls: ['./weather-locations.component.scss'],
})
export class WeatherLocationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddLocation(zipCode: string) {
    console.log('Adding', zipCode);
  }
}
