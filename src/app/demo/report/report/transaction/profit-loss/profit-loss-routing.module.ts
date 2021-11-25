import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfitLossComponent} from './profit-loss.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: ProfitLossComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitLossRoutingModule { }