import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';
import { FrutaService } from '../../providers/fruta.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  frutas: Fruta[];

  constructor( private servicioFruta: FrutaService ) {
    console.trace('BackofficeComponent constructor.');
   }

  ngOnInit() {
    console.trace('BackofficeComponent OnInit().');
    this.listarFrutas();
  }

  listarFrutas(): void {

    this.servicioFruta.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = [];
      this.frutas = data.map(element => element);
    });
  }

}
