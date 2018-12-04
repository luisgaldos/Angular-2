import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../../providers/tareas.service';
import { Tarea } from '../../../../model/Tarea';
import { $ } from 'protractor';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];
  nuevaTarea: string;
  visible: boolean;
  filtro: boolean;

  constructor(public tareaServicio: TareasService) {
    console.trace('TareasComponent Component');
  }

  ngOnInit() {

    this.recargarLista();
    this.visible = false;
    this.filtro = true;
  }

  crearTarea() {

    this.visible = true;
    let tarea = new Tarea();

    console.log(this.nuevaTarea);
    tarea.titulo = this.nuevaTarea;

    this.tareaServicio.add(tarea).subscribe(data =>
      this.recargarLista()
    );
  }

  eliminarTarea(id: number): void {

    this.tareaServicio.delete(id).subscribe(data =>
      this.recargarLista()
    );
  }

  recargarLista(): void {

    // Los OBSERVABLES requieren del método SUBSCRIBE.
    this.tareaServicio.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.tareas = data.map(el => el);
    });
  }

  terminarTarea(tarea: Tarea) {
    this.tareaServicio.checkTerminado(tarea).subscribe(data =>
      this.recargarLista()
    );
  }

  toggleOn(tarea: Tarea): void {
    console.log('Terminar tarea');
  }


}
