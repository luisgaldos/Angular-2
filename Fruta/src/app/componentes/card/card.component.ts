import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Fruta } from '../../model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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

  comprar() {
    console.trace('FrutaCardComponent comprar');

    // Emitimos eventos al componente padre y enviamos parametro 'frutaClick'
    this.clickComprar.emit({frutaClick : this.fruta});

  }
}
