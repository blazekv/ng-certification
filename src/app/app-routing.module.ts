import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLocationsComponent } from './containers/weather-locations/weather-locations.component';
import { ForecastComponent } from './containers/forecast/forecast.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ForecastLoadedGuard } from './guards/forecast-loaded.guard';

const routes: Routes = [
  {
    path: '',
    component: WeatherLocationsComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastComponent,
    canActivate: [ForecastLoadedGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
