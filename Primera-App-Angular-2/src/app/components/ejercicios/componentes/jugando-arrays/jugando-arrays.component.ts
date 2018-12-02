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
      
    this.inicializarFrutas();
    // PROGRAMACION FUNCIONAL
    this.obtenerOfertas();
    this.obtenerNombreFrutas();
    this.calcularPrecioTotal()
    this.obtenerPrimeraFrutaVerdeEnOferta();
    
  }

  inicializarFrutas(): void {
    
    this.arFrutas = [];

    let bananaColores: Colores[];
    bananaColores = [Colores.A, Colores.N];

    let f = new Fruta("Banana", 3.15, 500, bananaColores, true);
    f.descuento = 10;
    f.imagen = 'https://png.pngtree.com/element_origin_min_pic/16/07/06/17577cd1da7eaaa.jpg';
    this.arFrutas.push(f);

    let peraColores: Colores[];
    peraColores = [Colores.A, Colores.V];

    f = new Fruta("Pera", 2.00, 350, peraColores, false);
    f.imagen = 'https://pngimage.net/wp-content/uploads/2018/06/pera-png.png';
    this.arFrutas.push(f);

    let fresaColores: Colores[];
    fresaColores = [Colores.P, Colores.R, Colores.V];

    f = new Fruta("Fresa", 0.75, 100, fresaColores, true);
    f.descuento = 10;
    f.imagen = 'https://banner2.kisspng.com/20180328/jxe/kisspng-strawberry-pie-fruit-strawberry-5abba216a60cc0.7624839615222461666802.jpg';
    this.arFrutas.push(f);
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
