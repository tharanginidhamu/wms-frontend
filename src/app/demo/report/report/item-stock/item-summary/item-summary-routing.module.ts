import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemSummaryComponent} from './item-summary.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: ItemSummaryComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemSummaryRoutingModule { }