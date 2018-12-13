import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'alquiler'
})
export class AlquilerPipe implements PipeTransform {

  casas: Casa[];

  transform(value: Casa[], condicion?: boolean): any {
    this.casas = [];

    console.log('Pipe Alquiler para condicion = ' + condicion);
    if (condicion == undefined) {
      this.casas = value;
    } else {
        value.forEach(e => {
          if ( e.alquiler == condicion ) {
            this.casas.push(e);
          }
        });
    }
    console.log('%o', this.casas);
    return this.casas;
  }

}
