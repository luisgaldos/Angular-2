import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../../model/persona';
import { Genero } from '../../../../model/genero.enum';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  personas: Persona[];

  constructor() { 

    this.personas = [];

  }

  ngOnInit() {
    this.inicializarPersonas();
  }

  inicializarPersonas() {

    let p: Persona = new Persona();
   
    p = new Persona();
    p.nombre = "Zipi";
    p.sexo = Genero.H;
    this.personas.push(p);

    p = new Persona();
    p.nombre = "Zape";
    p.sexo = Genero.H;
    this.personas.push(p);

    p = new Persona();
    p.nombre = "Sindy";
    p.sexo = Genero.M;
    this.personas.push(p);

    p = new Persona();
    p.nombre = "Mindy";
    p.sexo =Genero.M;
    this.personas.push(p);

  }

}
