import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, start?: number, end?: number): string {
    let result = value.slice()
    if (start) {
      if (end) {
        result = value.slice(start, end)
      }
      else {
        result = value.slice(start, value.length)
      }
    }
    return result.join(',')
  }

}
