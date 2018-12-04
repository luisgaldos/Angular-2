import { Injectable } from '@angular/core';
import { Tarea } from '../model/Tarea';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea[];
  ENDPOINT: string = "http://localhost:3000/tareas";

  constructor(public http: HttpClient) {
    console.trace('TareasService Component');
  }

  getAll(): Observable<any> {
   
    this.ENDPOINT = "http://localhost:3000/tareas"
    return this.http.get(this.ENDPOINT);
  }

  add(tarea: Tarea): Observable<any> {

    tarea.id = null;
    let body = {
      "titulo": tarea.titulo,
      "terminado": tarea.terminado
    }
   
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.ENDPOINT, body, httpOptions);
  }

  delete(id: number): Observable<any> {

    return this.http.delete(this.ENDPOINT + "/" + id);

  }

  checkTerminado(tarea: Tarea) {

    let URI: string =  this.ENDPOINT + "/" + tarea.id;
    console.log(!tarea.terminado);
    let body  = {           
      "terminado": !tarea.terminado
    };  
   
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch(URI, body, httpOptions);
  }
}
