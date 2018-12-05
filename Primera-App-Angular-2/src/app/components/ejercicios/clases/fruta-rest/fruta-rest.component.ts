import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FrutaService } from '../../../../providers/fruta.service';
import { Fruta } from '../../../../model/fruta';

@Component({
  selector: 'app-fruta-rest',
  templateUrl: './fruta-rest.component.html',
  styleUrls: ['./fruta-rest.component.scss']
})
export class FrutaRESTComponent implements OnInit {

  frutas: Fruta[];
  frutaSelec: Fruta;

  constructor(public servicio: FrutaService) {
    this.frutas = [];
    this.frutaSelec = new Fruta();
   }

  ngOnInit() {
    console.log('Constructor FrutaRESTComponent');
    this.frutas = [];
    this.cargarFrutas();
  }

  cargarFrutas() {
    this.servicio.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = data.map(element => element);
    });
    if (!this.frutaSelec ) {
      this.frutaSelec = this.frutas[0];
    }
  }

  seleccionar(f: Fruta): void {
    this.frutaSelec = f;
  }

  eliminar(id: number) {
    this.servicio.delete(id).subscribe(data =>
      this.cargarFrutas()
    );
  }
}
