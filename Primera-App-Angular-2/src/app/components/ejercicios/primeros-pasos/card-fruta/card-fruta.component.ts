import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Fruta } from '../../../../model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './card-fruta.component.html',
  styleUrls: ['./card-fruta.component.scss']
})
export class CardFrutaComponent implements OnInit {

  _fruta: Fruta;
  _fruta2?: Fruta;   // Variable de entrada opcional

  difPrecio: number;
  difCalorias: number;

  @Input('_fruta') set fruta(value: Fruta) {
    if (value) {
      this._fruta = value;
    } else {
      this._fruta = this.frutaPrueba();
    }
  }

   get fruta(): Fruta {
    return this._fruta;
  }

  @Input('_fruta2') set fruta2(value: Fruta) {
      this._fruta2 = value;
  }

   get fruta2(): Fruta {
    return this._fruta2;
  }

  @Output() clickComprar = new EventEmitter();

  constructor() {
    console.trace('Constructor FrutaCardComponent');
   }

  ngOnInit() {
    console.trace('FrutaCardComponent OnInit()');
  }

  frutaPrueba(): Fruta {
    let fruta = new Fruta();
    this.fruta.imagen = 'https://png.pngtree.com/element_origin_min_pic/16/11/01/db17d42b1d8e8f3a587fc2a4ae774d3b.jpg';

    return this.fruta;
  }

  comparar() {

    if (this.fruta2) {
      this.difPrecio = this.fruta.precio - this.fruta2.precio;
      this.difCalorias = this.fruta.calorias - this.fruta2.calorias;
    }
    
  }

  comprar() {
    console.trace('FrutaCardComponent comprar');

    // Emitimos eventos al componente padre y enviamos parametro 'frutaClick'
    this.clickComprar.emit({frutaClick : this.fruta});

  }

}
