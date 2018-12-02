import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss']
})
export class PrimerComponenteComponent implements OnInit {

  // Declaración de Atributos
  title: string;
  frutas: string[];
  
  constructor() { 
    
    console.trace('FrutaComponent Constructor.');
    this.title = 'Fruta';
    this.frutas = ['Fresa', 'Plátano', 'Mango', 'Kiwi'];
   
  }

  ngOnInit() {

    console.trace('FrutaComponent OnInit.');
   
  }

}
