import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos-componente',
  templateUrl: './alumnos-componente.component.html',
  styleUrls: ['./alumnos-componente.component.scss']
})
export class AlumnosComponenteComponent implements OnInit {

  title: string;
  alumnos: string[];
  
  constructor() { 

    console.trace("Alumnos Constructor.");
    this.title = 'Alumnos';
    this.alumnos=["Alain", "Valery", "Andrea", "Adriana", "Adrián", "Asier", "Raul", "Luis"];
  }

  ngOnInit() {

    console.trace("Alumnos OnInit.");
    
  }

}
