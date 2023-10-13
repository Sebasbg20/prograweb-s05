import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },

  //ADD MORE ROUTES
  { path: '', redirectTo: '/form', pathMatch: 'full'}, //OPTIONAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
