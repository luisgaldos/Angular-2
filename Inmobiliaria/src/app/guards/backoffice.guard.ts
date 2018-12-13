import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class BackofficeGuard implements CanActivate {
  
  constructor(private service: LoginService, private router: Router) { 
    console.log("Constuctor BackofficeGuardGuard");
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      if ( !this.service.isLogged()) {
        this.router.navigate(['/login']);
        return false;
      }
      
    return true;
  }
}
