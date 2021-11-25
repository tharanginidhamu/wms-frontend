import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CashflowComponent} from './cashflow.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: CashflowComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashFlowRoutingModule { }