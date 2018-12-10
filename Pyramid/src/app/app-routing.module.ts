import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/dietas/components/home/home.component';

const routes: Routes = [

  { path: 'dietas-home', component: HomeComponent },
  { path: '', redirectTo: '/dietas-home', pathMatch: 'full'}, // INVALID URLs
  { path: '**', component: HomeComponent } // PAGE NOT FOUND

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
