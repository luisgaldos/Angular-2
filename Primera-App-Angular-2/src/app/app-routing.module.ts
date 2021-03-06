import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTES
import { HomeComponent } from './components/home/home.component';
import { GeneralComponent } from './components/docs/general/general.component';
import { PipesComponent } from './components/docs/pipes/pipes.component';
import { PrimerComponenteComponent } from './components/ejercicios/primeros-pasos/primer-componente/primer-componente.component';
import { AlumnosComponenteComponent } from './components/ejercicios/primeros-pasos/alumnos-componente/alumnos-componente.component';
import { JugandoArraysComponent } from './components/ejercicios/primeros-pasos/jugando-arrays/jugando-arrays.component';
import { ComparadorFrutaComponent } from './components/ejercicios/primeros-pasos/comparador-fruta/comparador-fruta.component';
import { VideojuegoDetalleComponent } from './components/ejercicios/clases/videojuego-detalle/videojuego-detalle.component';
import { PersonasComponent } from './components/ejercicios/clases/personas/personas.component';
import { TareasComponent } from './components/ejercicios/clases/tareas/tareas.component';
import { FrutaRESTComponent } from './components/ejercicios/clases/fruta-rest/fruta-rest.component';
import { FormReactivoComponent } from './components/docs/form-reactivo/form-reactivo.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

// GUARDS
import { BackofficeGuardGuard } from './guards/backoffice-guard.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component :  HomeComponent},
  { path: 'doc-general', component : GeneralComponent },
  { path: 'doc-pipes', component : PipesComponent },
  { path: 'doc-formularios-reactivos', component : FormReactivoComponent },
  { path: 'primeros-pasos-primer-componente', component : PrimerComponenteComponent },
  { path: 'primeros-pasos-comp-alumno', component : AlumnosComponenteComponent },
  { path: 'primeros-pasos-arrays', component : JugandoArraysComponent },
  { path: 'primeros-pasos-comparador', component : ComparadorFrutaComponent },
  { path: 'clase-videojuego', component : VideojuegoDetalleComponent },
  { path: 'clase-persona', component : PersonasComponent },
  { path: 'clase-tarea', component : TareasComponent },
  { path: 'clase-fruta', component : FrutaRESTComponent },
  { path: 'login', component : LoginComponent },
  { path: 'backoffice', component : BackofficeComponent, canActivate: [BackofficeGuardGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
