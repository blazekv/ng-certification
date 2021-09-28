import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLocationsComponent } from './containers/weather-locations/weather-locations.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherLocationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
