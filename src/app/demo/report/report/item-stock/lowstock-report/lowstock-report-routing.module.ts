import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LowstockReportComponent} from './lowstock-report.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: LowstockReportComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LowStockRoutingModule { }