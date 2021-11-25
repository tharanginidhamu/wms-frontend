import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllpartyReportComponent} from './allparty-report.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: AllpartyReportComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPartyReportRoutingModule { }