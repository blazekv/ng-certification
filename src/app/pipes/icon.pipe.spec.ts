import { IconPipe } from './icon.pipe';

describe('IconPipe', () => {
  it('create an instance', () => {
    const pipe = new IconPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return sun on 01 number', () => {
    const pipe = new IconPipe();
    expect(pipe.transform('01d')).toBe('sun');
  });

  it('should return sun on unknown', () => {
    const pipe = new IconPipe();
    expect(pipe.transform('78d')).toBe('sun');
  });

  it('should return snow on 13', () => {
    const pipe = new IconPipe();
    expect(pipe.transform('13d')).toBe('snow');
  });
});
