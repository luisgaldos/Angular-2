import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Casa } from '../../model/casa';
import { CasasService } from '../../providers/casas.service';
import { Servicio } from '../../model/servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  casa: Casa;
  servicios: FormArray;
  mensaje = "";
  casaDemo = "";

  constructor(private _route: ActivatedRoute, public servicioCasas: CasasService) {
    console.trace('FormularioComponent constructor.')
    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormularioComponent OnInit()');
  }

  crearFormulario(): void {
    // ARRAY SERVICIOS
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio: new FormControl('', [Validators.required, Validators.min(50)]),
      alquiler: new FormControl(''),
      habitaciones: new FormControl('', [Validators.required, Validators.min(1), Validators.max(999)]),
      foto: new FormControl('', [Validators.minLength(10), Validators.maxLength(250), Validators.pattern("(http(s?):\/\/).+(\.jpg|gif|png|jpeg)$")]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]),
      servicios: new FormArray([this.crearServicio('TV')], Validators.minLength(1)) 
    });
  }

  get nombre() { return this.formulario.get('nombre'); }
  get precio() { return this.formulario.get('precio'); }
  get alquiler() { return this.formulario.get('alquiler'); }
  get habitaciones() { return this.formulario.get('habitaciones'); }
  get foto() { return this.formulario.get('foto'); }
  get direccion() { return this.formulario.get('direccion'); }

  crearServicio(nombre: string): FormGroup {

    return new FormGroup({
      "nombre": new FormControl(nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      "disponible": new FormControl(false, [])
    });
  }

  addServicio(): void {
    let arrayServicios = this.formulario.get('servicios') as FormArray;
    arrayServicios.push(this.crearServicio(""));

  }

  deleteServicio(ind: number): void {

    let arrayServicios = this.formulario.get('servicios') as FormArray;
    if (arrayServicios.length > 1) {
      arrayServicios.removeAt(ind);
    }
  }

  submitar() {

    let c = new Casa();

    c.nombre = this.formulario.controls.nombre.value;
    c.precio = this.formulario.controls.precio.value;
    c.alquiler = this.formulario.controls.alquiler.value;
    c.habitaciones = this.formulario.controls.habitaciones.value;
    c.foto = this.formulario.controls.foto.value;
    c.direccion = this.formulario.controls.direccion.value;
    c.servicios = this.formulario.controls.servicios.value;;

    this.servicioCasas.add(c).subscribe(data => {
      this.mensaje = this.nombre.value + " creado/a.";
    });
  }

  cargarValoresFormulario(): void {

    this.formulario.controls.nombre.setValue('La Luna');
    this.formulario.controls.precio.setValue(250);
    this.formulario.controls.alquiler.setValue(true);
    this.formulario.controls.habitaciones.setValue(3);
    this.formulario.controls.foto.setValue("https://images.vexels.com/media/users/3/137378/isolated/preview/c54a6e8d091727d3a9c470bb209688a7-inicio-casa-de-la-ciudad-by-vexels.png");
    this.formulario.controls.direccion.setValue('La piruleta, 2, Narnia');
  /*   let servicios: Servicio[] = [];
    let servicio = new Servicio();
    servicio.nombre = 'TV';
    servicio.disponible = true;
    servicios.push(servicio);
    this.formulario.controls.servicios.setValue(servicio) */

  }

  closeAlert(): void {
    this.mensaje = "";
  }

}
