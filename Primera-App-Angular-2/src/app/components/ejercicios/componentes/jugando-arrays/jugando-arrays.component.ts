import { Component, OnInit } from '@angular/core';
import { Colores } from '../../../../model/colores.enum';
import { Fruta } from '../../../../model/fruta';

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
  
  constructor() { 

    console.trace('Constructor JugandoArraysComponent');
    this.arFrutas = [];
    this.ofertas = [];
    this.nombres = [];
    this.precioTotal = 0;

  }

  ngOnInit() {

    console.trace('JugandoArraysComponent OnInit()');
  
    //this.inicializarFrutas();
    // PROGRAMACION FUNCIONAL
    this.obtenerOfertas();
    this.obtenerNombreFrutas();
    this.calcularPrecioTotal()
    this.obtenerPrimeraFrutaVerdeEnOferta();
    
  }

  obtenerOfertas(): void {
    this.ofertas = this.arFrutas.filter(fruta => fruta.oferta === true);
  }

  obtenerNombreFrutas(): void {
    this.nombres = this.arFrutas.map(fruta => fruta.nombre);
  }

  calcularPrecioTotal(): void {
    this.precioTotal = this.arFrutas.map(fruta => fruta.precio).reduce( (c, p) => c + p);
  }

  obtenerPrimeraFrutaEnOferta(): void {
    this.primeraFrutaOferta = this.arFrutas.find(fruta => fruta.oferta);
  }

  obtenerPrimeraFrutaVerdeEnOferta(): void {

    this.frutaOfertaVerde = this.arFrutas.find( f => f.colores.find( c => c === Colores.V) === 'Verde');
  }

}
