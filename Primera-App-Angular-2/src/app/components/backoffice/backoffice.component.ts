import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(private servicio: LoginService) {
    console.trace('BackofficeComponent constructor.');
   }

  ngOnInit() {
    console.trace('BackofficeComponent ngOnInit().');
  }

  logout(): void {
    this.servicio.logOut();
  }

}
