import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';
import { FrutaService } from '../../providers/fruta.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas: Fruta[];
  filtro: boolean;
  frutasBusqueda: Fruta[];
  carro: Fruta[];
  fruta1: Fruta;
  fruta2: Fruta;
  txtBusqueda: string;

  difPrecio: number;
  difCalorias: number;

  preciosCant: number[];
  precioTotal: number;

  constructor(public servicioFruta: FrutaService) { 
    this.carro = [];
    this.preciosCant = [];
    this.precioTotal = 0;
    this.fruta1 = new Fruta();
    this.fruta2 = new Fruta();
    this.txtBusqueda = "";
    this.frutasBusqueda = [];
    this.filtro = undefined;
  }

  ngOnInit() {

    this.listarFrutas();
   
  }

  private listarFrutas(): void {
    this.servicioFruta.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = [];
      this.frutas = data.map(element => element
        );
        this.fruta1 = this.frutas[0];
        this.fruta2 = this.frutas[1];
    });
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
    this.precioTotal = 0;
    if (this.carro.length > 0) {
     
      this.carro.forEach(el => {
        let precioFinal = 0;
        if (el.oferta) {
          precioFinal = el.cantidad * (el.precio - (el.precio * (el.descuento / 100)));
        } else {
          precioFinal = el.cantidad * el.precio;
        }
        
        this.precioTotal += precioFinal;

      });

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

  buscar(): void {
    this.frutasBusqueda = [];
    if (this.txtBusqueda == "") {
      this.listarFrutas();
    } else {
      this.frutas.forEach(e => {
        if (e.nombre.toLowerCase().includes( this.txtBusqueda.toLowerCase() )) {
          this.frutasBusqueda.push(e);
        }
      });
      this.frutas = this.frutasBusqueda;

    }
    
    console.log(this.frutasBusqueda.length);
  }

  ordenarFrutas() {
    this.frutas.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  seleccionarFrutas(): void {
    let coincidencias;
    if (this.filtro == true || this.filtro == false) {
      coincidencias = this.frutas.filter((e) => e.oferta == this.filtro);
      console.log('Seleccionar Frutas, Coincidencias %o para filtro = ' + this.filtro, coincidencias);
      if ( coincidencias.length > 1 ) {
        this.fruta1 = coincidencias[0];
        this.fruta2 = coincidencias[1];
      } 
    }
    
    
  }

}
