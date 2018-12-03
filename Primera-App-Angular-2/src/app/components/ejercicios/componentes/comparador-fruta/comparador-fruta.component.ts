import { Component, OnInit } from '@angular/core';
import { Colores } from '../../../../model/colores.enum';
import { Fruta } from '../../../../model/fruta';
import { FrutaService } from '../../../../providers/fruta.service';

@Component({
  selector: 'app-comparador-fruta',
  templateUrl: './comparador-fruta.component.html',
  styleUrls: ['./comparador-fruta.component.scss']
})
export class ComparadorFrutaComponent implements OnInit {

  frutas: Fruta[];
  carro: Fruta[];
  fruta1: Fruta;
  fruta2: Fruta;

  preciosCant: number[];
  precioTotal: number;

  constructor(public servicioFruta: FrutaService) { 
    this.preciosCant = [];
    this.precioTotal = 0;
    this.fruta1 = new Fruta();
  }

  ngOnInit() {

    this.servicioFruta.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = [];
      this.frutas = data.map(element => {
        console.log(element);
        element;
      }
        );
    });

    this.fruta1 = this.frutas[0];
    this.fruta2 = this.frutas[1];
    this.carro = [];
  }

  seleccionar(fruta : Fruta) {
    console.log ('Fruta seleccionada: ' + fruta);
    this.fruta2 = this.fruta1;
    this.fruta1 = fruta;
    
  }

  actualizarCarro(event: Event) {
    console.debug('Comprar ');

    let f: Fruta = event['frutaClick'];
    let ind = this.carro.indexOf(f);

    console.log('Fruta comprada: ' + f.nombre);

    if ( ind < 0) 
    {
      f.cantidad++;
      this.carro.push(f);  
    } 
    else 
    {
      this.carro[ind].cantidad++;
    }

    this.calcularPrecioTotal();
    console.log('El precio total es de: ' + this.precioTotal)
  }

  calcularPrecioTotal(): void {
    this.preciosCant = [];

    this.preciosCant = this.carro.map(f => f.cantidad * f.precio);

    this.precioTotal = this.preciosCant.reduce( (c, p) => c + p);
  }

  menos(f: Fruta): void {
    let ind = this.carro.indexOf(f);
    if (this.carro[ind].cantidad > 1) 
    {
      this.carro[ind].cantidad--;
    }
    else 
    {
      this.eliminar(f);
    }
    this.calcularPrecioTotal();
  }

  mas(f: Fruta): void {
    let ind = this.carro.indexOf(f);
    this.carro[ind].cantidad++;
    this.calcularPrecioTotal();
  }

  eliminar(f: Fruta): void {
    console.log('Click eliminar');
    let ind = this.carro.indexOf(f);
    this.carro[ind].cantidad=0;
    this.carro.splice(ind, 1);
    this.calcularPrecioTotal();
  }

}
