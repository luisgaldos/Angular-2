import { Component, OnInit } from '@angular/core';
import { Colores } from '../../../../model/colores.enum';
import { Fruta } from '../../../../model/fruta';

@Component({
  selector: 'app-comparador-fruta',
  templateUrl: './comparador-fruta.component.html',
  styleUrls: ['./comparador-fruta.component.scss']
})
export class ComparadorFrutaComponent implements OnInit {

  
  frutas: Fruta[];
  fruta1: Fruta;
  fruta2: Fruta;

  constructor() { }

  ngOnInit() {
    this.inicializarFrutas();
    this.fruta1 = this.frutas[0];
    this.fruta2 = this.frutas[1];
  }

  inicializarFrutas(): void {
    
    this.frutas = [];

    let bananaColores: Colores[];
    bananaColores = [Colores.A, Colores.N];

    let f = new Fruta("Banana", 3.15, 500, bananaColores, true);
    f.imagen = 'https://png.pngtree.com/element_origin_min_pic/16/07/06/17577cd1da7eaaa.jpg';
    f.descuento = 10;
    this.frutas.push(f);

    let peraColores: Colores[];
    peraColores = [Colores.A, Colores.V];

    f = new Fruta("Pera", 2.00, 350, peraColores, false);
    f.descuento = 0;
    f.imagen = 'https://pngimage.net/wp-content/uploads/2018/06/pera-png.png';
    this.frutas.push(f);

    let fresaColores: Colores[];
    fresaColores = [Colores.P, Colores.R, Colores.V];

    f = new Fruta("Fresa", 0.75, 100, fresaColores, true);
    f.descuento = 10;
    f.imagen = 'https://banner2.kisspng.com/20180328/jxe/kisspng-strawberry-pie-fruit-strawberry-5abba216a60cc0.7624839615222461666802.jpg';
    this.frutas.push(f);
  }

  seleccionar(fruta : Fruta) {
    console.log ('Fruta seleccionada: ' + fruta);
    this.fruta2 = this.fruta1;
    this.fruta1 = fruta;
  }

}
