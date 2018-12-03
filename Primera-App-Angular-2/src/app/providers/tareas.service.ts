import { Injectable } from '@angular/core';
import { Tarea } from '../model/Tarea';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea[];
  url: string = "http://localhost:3000/tareas";

  constructor(public http: HttpClient) {
    console.trace('TareasService Component');
  }

  getAll(): Observable<any> {
   
    this.url = "http://localhost:3000/tareas"
    return this.http.get(this.url);
  }
}
