import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../../model/number-validator';
import { Fruta } from '../../../model/fruta';
import { FrutaService } from '../../../providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  
  formulario: FormGroup;
  frutas: Fruta[];

  constructor(public servicioFruta: FrutaService) {
    console.log('Constructor FormularioComponent');

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio: new FormControl('', [Validators.required]),
      calorias: new FormControl('', [Validators.required]),
      oferta: new FormControl(''),
      descuento: new FormControl(''),
      imagen: new FormControl('')
    });

   }

  ngOnInit() {
    console.log('FormularioComponent OnInit()');
  }

  cargarFormulario() {

    let fruta = new Fruta();

    this.formulario.controls.nombre.setValue(fruta.nombre);
    this.formulario.controls.precio.setValue(fruta.precio);
    this.formulario.controls.oferta.setValue(fruta.oferta);
    this.formulario.controls.calorias.setValue(fruta.calorias);
    this.formulario.controls.descuento.setValue(fruta.descuento);
    this.formulario.controls.imagen.setValue(fruta.imagen);

  }

  submitar() {

    let f = new Fruta();

    f.nombre = this.formulario.controls.nombre.value;
    f.precio = this.formulario.controls.precio.value;

    f.oferta = this.formulario.controls.oferta.value;
    f.descuento = this.formulario.controls.descuento.value;
    
    f.calorias = this.formulario.controls.calorias.value;
    f.imagen = this.formulario.controls.imagen.value;

    this.servicioFruta.add(f).subscribe(data =>
      this.recargarLista()
    );

  }

  recargarLista(): void {

    this.servicioFruta.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
      this.frutas = [];
      this.frutas = data.map(element => element
        );
    });
  }

}
