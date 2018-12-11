import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrutaService } from './providers/fruta.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { ComparadorComponent } from './componentes/comparador/comparador.component';
import { BackofficeComponent } from './componentes/backoffice/backoffice.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FrutasOfertaPipe } from './pipes/frutas-oferta.pipe';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ComparadorComponent,
    BackofficeComponent,
    LoginComponent,
    FormularioComponent,
    FrutasOfertaPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FrutaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
