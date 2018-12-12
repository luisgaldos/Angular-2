import { Component } from '@angular/core';
import { LoginService } from './providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fruta';

  constructor( private servicioLogin: LoginService, private router: Router ) {
    console.trace('Constructor AppComponent');
  }

  isLogged() {
    return this.servicioLogin.isLogged();
  }

  cerrarSesion(): void {
    this.servicioLogin.logOut();
    this.router.navigate(['/comparador']);
  }

}

