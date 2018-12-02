import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTES
import { GeneralComponent } from './components/docs/general/general.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/docs/pipes/pipes.component';
import { PrimerComponenteComponent } from './components/ejercicios/componentes/primer-componente/primer-componente.component';
import { JugandoArraysComponent } from './components/ejercicios/componentes/jugando-arrays/jugando-arrays.component';
import { ComparadorFrutaComponent } from './components/ejercicios/componentes/comparador-fruta/comparador-fruta.component';
import { VideojuegoDetalleComponent } from './components/ejercicios/clases/videojuego-detalle/videojuego-detalle.component';
import { PersonasComponent } from './components/ejercicios/clases/personas/personas.component';
import { PersonasPipe } from './pipes/personas.pipe';
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { AlumnosComponenteComponent } from './components/ejercicios/componentes/alumnos-componente/alumnos-componente.component';
import { CardFrutaComponent } from './components/ejercicios/componentes/card-fruta/card-fruta.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    HomeComponent,
    PipesComponent,
    PrimerComponenteComponent,
    JugandoArraysComponent,
    ComparadorFrutaComponent,
    VideojuegoDetalleComponent,
    PersonasComponent,
    PersonasPipe,
    VideojuegoPipe,
    AlumnosComponenteComponent,
    CardFrutaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
