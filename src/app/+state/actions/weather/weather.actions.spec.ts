import * as fromWeather from './weather.actions';
import { WEATHER_ACTIONS } from './weather.actions';

describe('loadWeathers', () => {
  it('should return an action', () => {
    expect(WEATHER_ACTIONS.addWeatherLocation({ zipCode: '23232' }).type).toBe(
      '[Weather] Add Location'
    );
  });
});
