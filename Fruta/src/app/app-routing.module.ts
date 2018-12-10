import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparadorComponent } from './componentes/comparador/comparador.component';
import { BackofficeComponent } from './componentes/backoffice/backoffice.component';

import { BackofficeGuard } from './guards/backoffice.guard';
import { LoginComponent } from './componentes/login/login.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  { path: 'comparador', component: ComparadorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'backoffice', component : BackofficeComponent, canActivate: [BackofficeGuard] },
  { path: '', redirectTo: '/comparador', pathMatch: 'full' },
  { path: '**', component: ComparadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
