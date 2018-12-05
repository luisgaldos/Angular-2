import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Fruta } from '../../../../../model/fruta';
import { FrutaService } from '../../../../../providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  frutas: Fruta[];
  ok: boolean;
  colores: FormArray;
  @Output() submit = new EventEmitter();
  
  constructor(public servicio: FrutaService) { 

    this.colores = new FormArray([this.crearColorFruta("#CCC")], [Validators.minLength(1)]);
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio: new FormControl('0.00', [Validators.required, Validators.min(0.5), Validators.max(999)]),
      calorias: new FormControl('0', [Validators.required, Validators.min(5), Validators.max(250)]),
      colores: new FormArray([this.crearColorFruta("#CCC")], Validators.minLength(1)),
      oferta: new FormControl(false),
      descuento: new FormControl('0', [Validators.min(1), Validators.max(90)]),
      imagen: new FormControl('', [Validators.pattern("(http(s?):\/\/).+(\.jpg|gif|png|jpeg)$")])
    });
  }

  get nombre() { return this.formulario.get('nombre'); }
  get precio() { return this.formulario.get('precio'); }
  get oferta() { return this.formulario.get('oferta'); }
  get arColores() { return this.formulario.get('colores') as FormArray; }
  get calorias() { return this.formulario.get('calorias'); }
  get descuento() { return this.formulario.get('descuento'); }
  get imagen() { return this.formulario.get('imagen'); }

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

  crearColorFruta(codigo: string): FormGroup {

    return new FormGroup({
      color: new FormControl('#00FF00', [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
    });
  }

  nuevoColor(): void {
    let arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFruta(""));

  }

  eliminarColor(ind: number): void {

    let arrayColores = this.formulario.get('colores') as FormArray;
    if (arrayColores.length > 1) {
      arrayColores.removeAt(ind);
    }

  }

  submitar() {

    let f = new Fruta();

    f.nombre = this.formulario.controls.nombre.value;
    f.precio = this.formulario.controls.precio.value;

    f.oferta = this.formulario.controls.oferta.value;
    f.descuento = this.formulario.controls.descuento.value;

    f.calorias = this.formulario.controls.calorias.value;
    f.imagen = this.formulario.controls.imagen.value;

    this.servicio.add(f).subscribe(data => 
      this.submit.emit({})
    );

  }

  recargarLista(): void {

    this.servicio.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
    });
  }

}
