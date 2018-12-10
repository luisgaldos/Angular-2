import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { LoginService } from '../../providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  mensaje: string;

  constructor( private fb: FormBuilder, 
                private service: LoginService, private router: Router ) { 
                  

    console.trace("Constructor LoginComponent.");
    this.mensaje = "";
  }

  ngOnInit() {

    console.trace("LoginComponent OnInit().");
    this.crearFormularioReactivo();
  }

  private crearFormularioReactivo(): void {
    this.form = this.fb.group ({
      nombre: ['frutti', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['frutti', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]]
    });
  }

  get nombre() { return this.form.get('nombre');}
  get password() { return this.form.get('password');}

  submitar(): void {
    console.trace("LoginComponent submit().");
    
    let nombre = this.nombre.value;
    let password = this.password.value;

    let u = new Usuario();
    u.nombre = nombre;
    u.password = password;

    if (this.service.login( u )) {
      this.router.navigate(['/backoffice']);
    } else {
      this.mensaje = 'Credenciales incorrectas.';
    }
  }

}
