import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTES
import { HomeComponent } from './components/home/home.component';
import { GeneralComponent } from './components/docs/general/general.component';
import { PipesComponent } from './components/docs/pipes/pipes.component';
import { PrimerComponenteComponent } from './components/ejercicios/componentes/primer-componente/primer-componente.component';
import { AlumnosComponenteComponent } from './components/ejercicios/componentes/alumnos-componente/alumnos-componente.component';
import { JugandoArraysComponent } from './components/ejercicios/componentes/jugando-arrays/jugando-arrays.component';
import { ComparadorFrutaComponent } from './components/ejercicios/componentes/comparador-fruta/comparador-fruta.component';
import { VideojuegoDetalleComponent } from './components/ejercicios/clases/videojuego-detalle/videojuego-detalle.component';
import { PersonasComponent } from './components/ejercicios/clases/personas/personas.component';
import { TareasComponent } from './components/ejercicios/clases/tareas/tareas.component';
import { FormularioComponent } from './components/docs/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component :  HomeComponent},
  { path: 'doc-general', component : GeneralComponent },
  { path: 'doc-pipes', component : PipesComponent },
  { path: 'doc-formularios', component : FormularioComponent },
  { path: 'comp-primer', component : PrimerComponenteComponent },
  { path: 'comp-alumno', component : AlumnosComponenteComponent },
  { path: 'comp-arrays', component : JugandoArraysComponent },
  { path: 'comp-comparador', component : ComparadorFrutaComponent },
  { path: 'clase-videojuego', component : VideojuegoDetalleComponent },
  { path: 'clase-persona', component : PersonasComponent },
  { path: 'clase-tarea', component : TareasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
