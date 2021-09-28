import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../model/forecast';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private readonly endpointUrl = environment.apiUrl + 'forecast/daily';

  constructor(private http: HttpClient) {}

  getForecastByZipCode(zipCode: string): Observable<Forecast> {
    return this.http.get<Forecast>(this.endpointUrl, {
      params: { zip: zipCode, units: 'metric', cnt: 5 },
    });
  }
}
