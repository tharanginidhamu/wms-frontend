import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTransactionComponent} from './all-transaction.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: AllTransactionComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTransactionRoutingModule { }