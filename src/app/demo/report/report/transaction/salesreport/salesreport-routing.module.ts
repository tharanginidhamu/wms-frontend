import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesreportComponent} from './salesreport.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: SalesreportComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleReportRoutingModule { }