import { Component, OnInit } from '@angular/core';
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
    this.fruta2 = new Fruta();
  }

  ngOnInit() {

    this.servicioFruta.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = [];
      this.frutas = data.map(element => element
        );
        this.fruta1 = this.frutas[0];
        this.fruta2 = this.frutas[1];
    });

    
    this.carro = [];
  }

  seleccionar(fruta : Fruta) {
    console.log ('Fruta seleccionada: ' + fruta);
    this.fruta2 = this.fruta1;
    this.fruta1 = fruta;
    
  }

  actualizarCarro(event: Event) {

    let f: Fruta = event['frutaClick'];
    let ind = this.carro.indexOf(f);

    if ( ind < 0) 
    {
      f.cantidad = 1;
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

    if (this.carro.length > 0) {

      this.preciosCant = this.carro.map(f => f.cantidad * f.precio);
      this.precioTotal = this.preciosCant.reduce( (c, p) => c + p);

    } else {
      this.precioTotal = 0;
    }
    
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
    if (this.carro.length > 0) {
      
      this.carro.splice(ind, 1);
    
    } else {
      this.carro = [];
    }
    
    this.calcularPrecioTotal();
  }

}
