import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getWeatherState } from '../reducers';
import { WeatherState } from '../reducers/weather/weather.reducer';

export const WEATHER_SELECTORS = {
  zipCodes: createSelector(getWeatherState, (entityState: WeatherState) =>
    Object.keys(entityState.data)
  ),
  weatherLocations: createSelector(
    getWeatherState,
    (entityState: WeatherState) => entityState.data
  ),
  forecast: createSelector(
    getWeatherState,
    (entityState: WeatherState) => entityState.selectedForecast?.forecast
  ),
  selectedForecastZipCode: createSelector(
    getWeatherState,
    (entityState: WeatherState) => entityState.selectedForecast?.zipCode
  ),
  forecastAdding: createSelector(
    getWeatherState,
    (entityState: WeatherState) => entityState.forecastAdding
  ),
  forecastLoadingFinished: createSelector(
    getWeatherState,
    (entityState: WeatherState) => entityState.forecastLoadingFinished
  ),
};
