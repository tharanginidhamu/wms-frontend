import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartyReportbyItemComponent} from './party-reportby-item.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: PartyReportbyItemComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyReportRoutingModule { }