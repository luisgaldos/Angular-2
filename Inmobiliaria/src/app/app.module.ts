// MODULOS
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// PROVIDERS
import { LoginService } from './providers/login.service';

// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CasasService } from './providers/casas.service';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';

// PIPES
import { AlquilerPipe } from './pipes/alquiler.pipe';
import { PrecioPipe } from './pipes/precio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    LoginComponent,
    FormularioComponent,
    AlquilerPipe,
    PrecioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, CasasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
