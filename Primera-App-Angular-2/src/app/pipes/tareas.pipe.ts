import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../model/Tarea';

@Pipe({
  name: 'terminado'
})
export class TareasPipe implements PipeTransform {

  transform(value: Tarea[], condicion: boolean): any {
    
    return value.filter( v => v.terminado === condicion);;
  }

}
