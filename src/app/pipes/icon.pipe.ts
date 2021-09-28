import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
})
export class IconPipe implements PipeTransform {
  private readonly ICON_MAPPING: { [index: string]: string } = {
    '01': 'sun',
    '02': 'clouds',
    '03': 'clouds',
    '04': 'clouds',
    '09': 'rain',
    '10': 'rain',
    '11': 'rain',
    '13': 'snow',
    '50': 'clouds',
  };

  transform(value: string, ...args: unknown[]): string {
    const iconCode = value.length >= 2 ? value.slice(0, 2) : '';
    if (iconCode in this.ICON_MAPPING) {
      return this.ICON_MAPPING[iconCode];
    }
    return 'sun';
  }
}
