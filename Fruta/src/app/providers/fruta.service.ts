import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  ENDPOINT: string = "http://localhost:3000/frutas";

  constructor(public http: HttpClient) {
    console.trace('TareasService Component');
  }

  getAll(): Observable<any> {
    return this.http.get(this.ENDPOINT);
  }

  getById( id: number ): Observable<any> {
    return this.http.get(this.ENDPOINT + "/" + id);
  }

  add( fruta: Fruta ): Observable<any> {

    fruta.id = null;
    let body = {

      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "colores": fruta.colores,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.ENDPOINT, body, httpOptions);
  }

  delete(id: number): Observable<any> {

    return this.http.delete(this.ENDPOINT + "/" + id);

  }

  update( fruta: Fruta ):  Observable<any> {
    let body = {
      "id": fruta.id,
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "colores": fruta.colores,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.ENDPOINT + "/" + fruta.id, body, httpOptions);
  }
}

