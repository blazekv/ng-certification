import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly endpointUrl = environment.countryApiUrl;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.endpointUrl).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return {
            name: item.name?.common,
            code: item.cca2,
          };
        });
      })
    );
  }
}
