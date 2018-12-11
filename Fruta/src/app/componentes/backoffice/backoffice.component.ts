import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';
import { FrutaService } from '../../providers/fruta.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  editField: string;
  frutas: Fruta[];
  colaFrutas: Fruta[];
  mensaje: string;

  constructor( private servicioFruta: FrutaService ) {
    console.trace('BackofficeComponent constructor.');
    this.frutas = [];
    this.colaFrutas = [];
    this.mensaje = "";
   }

  ngOnInit() {
    console.trace('BackofficeComponent OnInit().');
    this.listarFrutas();
  }

  listarFrutas(): void {

    this.servicioFruta.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = [];
      this.frutas = data.map(element => element);
    });
  }

  eliminarFruta( id: number ): void {
    if(confirm("La operación que está a punto de realizar es permanente.¿Desea continuar?")) {
      this.servicioFruta.delete( id ).subscribe();
      this.mensaje = "Entrada eliminada.";
      this.listarFrutas();
    }
  }

}
