import { Component, OnInit } from '@angular/core';
import { Colores } from '../../../../model/colores.enum';
import { Fruta } from '../../../../model/fruta';
import { FrutaService } from '../../../../providers/fruta.service';

@Component({
  selector: 'app-jugando-arrays',
  templateUrl: './jugando-arrays.component.html',
  styleUrls: ['./jugando-arrays.component.scss']
})
export class JugandoArraysComponent implements OnInit {

  arFrutas: Fruta[];
  ofertas: Fruta[];
  nombres: string[];
  precioTotal: number;
  primeraFrutaOferta : Fruta;
  frutaOfertaVerde: Fruta;
  
  constructor(public servicioFruta: FrutaService) { 

    console.log('Constructor JugandoArraysComponent');
    this.arFrutas = [];
    this.ofertas = [];
    this.nombres = [];
    this.precioTotal = 0;

  }

  ngOnInit() {

    console.log('JugandoArraysComponent OnInit()');

    this.servicioFruta.getAll().subscribe(data => 
      this.arFrutas = data.map(
        element => element),
        error => console.log("Error: ", error),
        () => { // OBSERVABLE COMPLETO
          // PROGRAMACION FUNCIONAL
          console.log('Observer got a complete notification');
          
        });
        this.resolver();
  
  }

  resolver(): void {

    if (this.arFrutas.length > 0) {
      this.obtenerOfertas();
      this.obtenerNombreFrutas();
      this.calcularPrecioTotal()
      this.obtenerPrimeraFrutaVerdeEnOferta();
    }

  }

  obtenerOfertas(): void {
    this.ofertas = this.arFrutas.filter(fruta => fruta.oferta === true);
  }

  obtenerNombreFrutas(): void {
    this.nombres = this.arFrutas.map(fruta => fruta.nombre);
  }

  calcularPrecioTotal(): void {
    this.precioTotal = 0;
    this.precioTotal = this.arFrutas.map(fruta => fruta.precio).reduce( (c, p) => c + p);
  }

  obtenerPrimeraFrutaEnOferta(): void {
    this.primeraFrutaOferta = this.arFrutas.find(fruta => fruta.oferta);
  }

  obtenerPrimeraFrutaVerdeEnOferta(): void {

    this.frutaOfertaVerde = this.arFrutas.find( f => f.colores.find( c => c === Colores.V) === 'Verde');
  }

}
