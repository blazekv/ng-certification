import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Weather } from '../../model/weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent implements OnInit {
  @Input()
  weather?: Weather;

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
