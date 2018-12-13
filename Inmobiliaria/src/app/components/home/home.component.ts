import { Component, OnInit } from '@angular/core';
import { CasasService } from '../../providers/casas.service';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  casas: Casa[];
  casaSeleccionada: Casa;
  filtro: boolean; // Filtro == true -> Alquiler, Filtro == False -> Venta, Filtro == undefined -> Todas
  precioMin: number;
  precioMax: number;

  constructor( private servicioCasas : CasasService ) { 
    console.trace('Constructor HomeComponent.');
    this.casaSeleccionada = new Casa();
  }

  ngOnInit() {
    console.trace('HomeComponent OnInit().');
    this.cargarCasas();
  }

  cargarCasas(): any {
    this.servicioCasas.getAll().subscribe(data => {
      this.casas = data.map(element => element);
      this.casaSeleccionada = this.casas[0];
    });
  }

  seleccionarCasa( c: Casa ) {
    console.log('Casa seleccionada %o', c);
    this.casaSeleccionada = c;
  }

}
