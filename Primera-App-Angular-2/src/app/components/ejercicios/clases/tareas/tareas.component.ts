import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../../providers/tareas.service';
import { Tarea } from '../../../../model/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];

  constructor(public tareaServicio: TareasService) { 
    console.trace('TareasComponent Component');
  }

  ngOnInit() {

    // Los OBSERVABLES requieren del método SUBSCRIBE.
    this.tareaServicio.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.tareas = data.map(el => el);
    });
  }

}
