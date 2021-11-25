import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemWiseProfitComponent} from './item-wise-profit.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: ItemWiseProfitComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemWiseRoutingModule { }