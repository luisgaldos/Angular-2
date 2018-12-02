import { Pipe, PipeTransform } from '@angular/core';
import { Videojuego } from '../model/videojuego';

@Pipe({
  name: 'alquilado'
})
export class VideojuegoPipe implements PipeTransform {

  transform(value: Videojuego[], condicion: boolean): Videojuego[] {

    return value.filter( v => v.alquilado === condicion);
  }

}
