import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { Colores } from '../model/colores.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// INJECTABLE: 
// Se debe declarar en el constructor para poder utilizar.
// Se debe inicializar en el método OnInit().
// VER: Comparador-fruta
@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  frutas: Fruta[];
  url: string = "http://localhost:3000/frutas";

  constructor(public http: HttpClient) {
    console.trace('TareasService Component');
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

}