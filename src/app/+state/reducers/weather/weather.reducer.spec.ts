import { weatherInitialState, weatherReducer } from './weather.reducer';

describe('Weather Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = weatherReducer(weatherInitialState, action);

      expect(result).toBe(weatherInitialState);
    });
  });
});
