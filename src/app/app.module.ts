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
import { WeatherEffects } from './+state/effects/weather.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppKeyInterceptor } from './interceptors/app-key.interceptor';

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
  declarations: [AppComponent, WeatherLocationsComponent, AddLocationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(coreReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([WeatherEffects]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppKeyInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
