import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { WeatherLocationsComponent } from './containers/weather-locations/weather-locations.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { coreReducers } from './+state/reducers';
import { storageMetaReducer } from './storage.metareducer';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppKeyInterceptor } from './interceptors/app-key.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { MessageEffects } from './+state/effects/message/message.effects';
import { WeatherEffects } from './+state/effects/weather/weather.effects';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { IconPipe } from './pipes/icon.pipe';
import { ForecastComponent } from './containers/forecast/forecast.component';
import { LocationForecastComponent } from './components/location-forecast/location-forecast.component';
import { MatTableModule } from '@angular/material/table';
import { WeatherConditionComponent } from './components/weather-condition/weather-condition.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ButtonUiModule } from './modules/button-ui/button-ui.module';
import { MatIconModule } from '@angular/material/icon';

export function storageSyncReducer(reducer: ActionReducer<any>) {
  return storageMetaReducer<any>({
    storage: window.localStorage,
    stores: {
      weather: {
        includeKeys: ['data'],
      },
    },
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [storageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    WeatherLocationsComponent,
    AddLocationComponent,
    CurrentWeatherComponent,
    IconPipe,
    ForecastComponent,
    LocationForecastComponent,
    WeatherConditionComponent,
    WeatherIconComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(coreReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([WeatherEffects, MessageEffects]),
    StoreRouterConnectingModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    ButtonUiModule,
    MatIconModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppKeyInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
