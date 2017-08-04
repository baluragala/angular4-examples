import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'powerof'
})
export class PowerofPipe implements PipeTransform {

  transform(value: any, to: any): any {
    return Math.pow(value, to);
  }

}
