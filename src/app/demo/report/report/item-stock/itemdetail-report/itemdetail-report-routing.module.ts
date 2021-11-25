import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemdetailReportComponent} from './itemdetail-report.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: ItemdetailReportComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDetailRoutingModule { }