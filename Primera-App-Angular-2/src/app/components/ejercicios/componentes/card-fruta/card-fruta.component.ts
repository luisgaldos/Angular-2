import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from '../../../../model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './card-fruta.component.html',
  styleUrls: ['./card-fruta.component.scss']
})
export class CardFrutaComponent implements OnInit {

  _fruta: Fruta;

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


  constructor() {
    console.trace('Constructor FrutaCardComponent');
   }

  ngOnInit() {

  }

  frutaPrueba(): Fruta {
    let fruta = new Fruta("", 0, 0, [], false);
    this.fruta.nombre = 'Melocotón';
    this.fruta.calorias = 100;
    this.fruta.precio = 2.0;
    this.fruta.oferta = true;
    this.fruta.descuento = 10;
    this.fruta.imagen = 'https://png.pngtree.com/element_origin_min_pic/16/11/01/db17d42b1d8e8f3a587fc2a4ae774d3b.jpg';

    return this.fruta;
  }

}
