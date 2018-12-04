import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../../model/number-validator';
import { Fruta } from '../../../model/fruta';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  
  formulario: FormGroup;

  nombre: FormControl;

  constructor() {
    console.log('Constructor FormularioComponent');
    
    this.nombre = new FormControl();
    this.nombre.setValue('Melocotón');

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}\.[0-9]{2}$')]),
      calorias: new FormControl('', [Validators.required, NumberValidator.isNumberCheck]),
      oferta: new FormControl('', [Validators.required, NumberValidator.isNumberCheck]),
      decuento: new FormControl('', [Validators.required, NumberValidator.isNumberCheck]),
    });

   }

  ngOnInit() {
    console.log('FormularioComponent OnInit()');
  }

  cargarFormulario() {
    this.formulario.controls.nombre.setValue('Fresa');
    this.formulario.controls.precio.setValue(2.45);
  }

  submitar() {

    let f = new Fruta();

    f.nombre = this.formulario.controls.nombre.value;
    f.precio = this.formulario.controls.precio.value;
  }

}
