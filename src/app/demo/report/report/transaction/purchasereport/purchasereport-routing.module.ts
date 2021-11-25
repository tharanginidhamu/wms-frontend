import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PurchasereportComponent} from './purchasereport.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: PurchasereportComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseReportRoutingModule { }