import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../model/persona';
import { Genero } from '../model/genero.enum';

@Pipe({
  name: 'genero'
})
export class PersonasPipe implements PipeTransform {

  transform(value: Persona[], genero: Genero): any {
    
    console.trace(' Pipe genero');
    console.log(genero)
    let resultado: Persona[] = [];
    
    for (let v of value) {

      if (v.sexo == genero) {

        resultado.push(v);

      }
    }

    return resultado;
  }

}
