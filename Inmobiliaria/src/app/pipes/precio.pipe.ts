import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: Casa[], min?: number, max?: number): any {

    if (min && max) {
      return  value.filter(e =>  e.precio > min && e.precio < max);
    } else if (min) {
      return  value.filter(e =>  e.precio > min);
    } else if (max) {
      return  value.filter(e =>  e.precio < max);
    }
    return value; 
  }

}
