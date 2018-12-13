import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
 
  _casa: Casa;

  @Input('_casa') set casa(value: Casa) {
    if (value) {
      this._casa = value;
    } else {
      this._casa = this.casaPrueba();
    }
  }
  get casa(): Casa {
    return this._casa;
  }
  constructor() { 
    console.trace('Constructor DetalleComponent');
  }

  ngOnInit() {
    console.trace('DetalleComponent OnInit()');
  }

  casaPrueba(): Casa {
    return new Casa();
  }

}
