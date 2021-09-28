import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Weather } from '../model/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly endpointUrl = environment.apiUrl + 'weather';

  constructor(private http: HttpClient) {}

  getWeatherByZipCode(zipCode: string): Observable<Weather> {
    return this.http.get<Weather>(this.endpointUrl, { params: { zip: zipCode, units: 'metric' } });
  }
}
