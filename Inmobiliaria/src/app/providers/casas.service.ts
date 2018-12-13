import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  casas: Casa[];
  ENDPOINT: string = "http://localhost:3000/casas";

  constructor( public http: HttpClient ) { 
    console.trace('Constructor CasasService.');
    this.casas = [];
  }
  onOni

  getAll(): Observable<any> {
    return this.http.get(this.ENDPOINT);
  }

  getById( id: number ): Observable<any> {
    return this.http.get(this.ENDPOINT + "/" + id);
  }

  add( casa: Casa ): Observable<any> {

    console.log('Añadir casa %o', casa);
    casa.id = null;
    let body = {

      "nombre": casa.nombre,
      "precio": casa.precio,
      "alquiler": casa.alquiler,
      "habitaciones": casa.habitaciones,
      "foto": casa.foto,
      "direccion": casa.direccion,
      "servicios": casa.servicios
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.ENDPOINT, body, httpOptions);
  }
}
