import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemReportbyPartyComponent} from './item-reportby-party.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: ItemReportbyPartyComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemReportByItemRoutingModule { }