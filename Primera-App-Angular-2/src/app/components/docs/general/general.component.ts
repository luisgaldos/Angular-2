import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  x: number;
  texto: string;
  visible: boolean;
  txtBoton: string;

  constructor() { 
    this.x = 10;
    this.visible = true;
    this.txtBoton = 'Ocultar';
  }

  ngOnInit() {
  }

  showHide() {

    console.trace('Click ShowHide() Button');
    this.visible = (this.visible) ? false : true;
    this.txtBoton =  (this.visible) ? 'Ocultar' : 'Mostrar';
  }


}
