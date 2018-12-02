import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../../../model/videojuego';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {

  title: string;
  videojuego: Videojuego;
  videojuegos: Videojuego[];

  constructor() { 
    this.title = 'Aprendiendo a usar clases';
    
    this.videojuego = new Videojuego();
    this.videojuegos = [];
  }

  ngOnInit() {

    this.inicializarVideojuegos();
  }

  inicializarVideojuegos(): void {

    let v: Videojuego;
    
    v = new Videojuego();
    v.titulo = 'Mario Bros';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Donkey Kong';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Zelda';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Space Invaders';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Final Fantasy X';
    this.videojuegos.push(v);
  }

}
