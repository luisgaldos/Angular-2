import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fecha: Date;
  numero: number;

  constructor() {
    
    this.fecha = new Date();
    this.numero = Math.PI;
    
   }

  ngOnInit() {
  }

}
