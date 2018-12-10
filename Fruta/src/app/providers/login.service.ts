import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

const USUARIO_NOMBRE = 'frutti';
const USUARIO_PASSWORD = 'frutti';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: Usuario;

  constructor() {
    console.trace('LoginService Constructor');
    this.usuario = undefined;

   }

   isLogged(): boolean {
     
    if (this.usuario) 
    {
      return true;
    } 
    else
    {
      return false;
    }
    
   }

   login( u: Usuario ): boolean {

    console.trace('Login Service %o', u);
    if (u) {
      if (u.nombre == USUARIO_NOMBRE && u.password == USUARIO_PASSWORD) {
        this.usuario = u;
        return true;
      } else {
        this.usuario = undefined;
        return false;
      }
    }
   }

   logOut(): void {
     this.usuario = undefined;
   }
}
