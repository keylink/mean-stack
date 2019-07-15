
import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})

@Injectable()
export class ConverToHoursPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + 'h:' + (value - minutes * 60) + 'm';
  }
}
