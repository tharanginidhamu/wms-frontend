import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CashinCheckComponent} from './cashin-check.component';
import { ChequeformComponent } from "./chequeform/chequeform.component";

const routes: Routes = [
  {
    path: '',
    component: CashinCheckComponent
  },
  {
    path: 'chequeform',
    component: ChequeformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChequeRoutingModule { }