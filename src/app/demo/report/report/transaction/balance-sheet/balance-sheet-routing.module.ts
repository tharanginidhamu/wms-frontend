import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BalanceSheetComponent} from './balance-sheet.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: BalanceSheetComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceSheetRoutingModule { }