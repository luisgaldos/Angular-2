import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';
import { FrutaService } from '../../providers/fruta.service';
import { LoginService } from '../../providers/login.service';
import { Router } from '@angular/router';

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
  filtro: boolean;
  txtBusqueda: string;
  frutasBusqueda: Fruta[];

  constructor( private servicioFruta: FrutaService, private servicioLogin: LoginService) {
    console.trace('BackofficeComponent constructor.');
    this.frutas = [];
    this.colaFrutas = [];
    this.mensaje = "";
    this.txtBusqueda = "";
    this.frutasBusqueda = [];
    this.filtro = undefined;
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

  closeAlert(): void {
    this.mensaje = "";
  }

  buscar(): void {
    this.frutasBusqueda = [];
    if (this.txtBusqueda == "") {
      this.listarFrutas();
    } else {
      this.frutas.forEach(e => {
        if (e.nombre.toLowerCase().includes( this.txtBusqueda.toLowerCase() )) {
          this.frutasBusqueda.push(e);
        }
      });
      this.frutas = this.frutasBusqueda;

    }
    
    console.log(this.frutasBusqueda.length);
  }

  ordenarFrutas() {
    this.frutas.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

}
