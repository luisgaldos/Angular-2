import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Fruta } from '../../model/fruta';
import { FrutaService } from '../../providers/fruta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  private _id: number;
  formulario: FormGroup;
  frutas: Fruta[];
  ok: boolean;
  colores: FormArray;
  mensaje = "";

  @Output() submit = new EventEmitter();
  
  constructor(private _route: ActivatedRoute, public servicio: FrutaService) { 
    console.trace('FormularioComponent constructor.')
    this.crearFormulario();
    if (!this._id) {
      this.frutaColores.push(this.crearColorFruta(""));
    }
  }

  ngOnInit() {
    console.log('FormularioComponent OnInit()');

    // RECIBIR PARAMETRO URL
    this._id = +this._route.snapshot.paramMap.get('id');
  
    if (this._id) {
      this.servicio.getById(this._id).subscribe(data => {
          this.cargarValoresFormulario( data );
      });
    }
  }

  cargarLista(): void {
    this.servicio.getAll().subscribe(data => {
      console.log('Datos recibidos... %o', data);
    });
  }

  crearFormulario(): void {
    this.colores = new FormArray([this.crearColorFruta("#CCC")], [Validators.minLength(1)]);
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio: new FormControl('', [Validators.required, Validators.min(0.5), Validators.max(999)]),
      calorias: new FormControl('', [Validators.required, Validators.min(5), Validators.max(999)]),
      colores: new FormArray([], Validators.minLength(1)),
      oferta: new FormControl(false),
      descuento: new FormControl('', [Validators.min(1), Validators.max(90)]),
      imagen: new FormControl('', [Validators.minLength(10), Validators.maxLength(250), Validators.pattern("(http(s?):\/\/).+(\.jpg|gif|png|jpeg)$")])
    });
  }

  get nombre() { return this.formulario.get('nombre'); }
  get precio() { return this.formulario.get('precio'); }
  get oferta() { return this.formulario.get('oferta'); }
  get arColores() { return this.formulario.get('colores') as FormArray; }
  get calorias() { return this.formulario.get('calorias'); }
  get descuento() { return this.formulario.get('descuento'); }
  get imagen() { return this.formulario.get('imagen'); }
  get frutaColores() { return <FormArray>this.formulario.get('colores'); }

  cargarValoresFormulario( f: Fruta ) {

    if (!f) {
      f = new Fruta();
    }

    this.formulario.controls.nombre.setValue(f.nombre);
    this.formulario.controls.precio.setValue(f.precio);
    this.formulario.controls.oferta.setValue(f.oferta);
    this.formulario.controls.calorias.setValue(f.calorias);
    this.formulario.controls.descuento.setValue(f.descuento);
    this.formulario.controls.imagen.setValue(f.imagen);
    
    if(this._id) {  // HEMOS RECIBIDO UN PARAMETRO URL
      f.colores.forEach(e => {
        this.frutaColores.push(this.crearColorFruta(e));
      });
    }
    
  }

  crearColorFruta(codigo: string): FormGroup {

    return new FormGroup({
      color: new FormControl(codigo, [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
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

    // LEER COLORES
    let colores: string[] = [];
      for (let i = 0; i < this.frutaColores.length; i++) {
        colores.push(this.frutaColores.controls[i].value.color);
    }
    f.colores = colores;

    //console.log("%o", f);

    if ( this._id ) { // MODIFICAR
      f.id = this._id;
      this.servicio.update(f).subscribe(data => {
        this.submit.emit({});
        this.mensaje = this.nombre.value + " modificado/a.";
      });
    } else {  // INSERTAR
      
      console.log("%o", colores);
      this.servicio.add(f).subscribe(data => {
        this.submit.emit({});
        this.mensaje = this.nombre.value + " creado/a.";
      });
    }  
    
  }

  closeAlert(): void {
      this.mensaje = "";
  }

 

}
