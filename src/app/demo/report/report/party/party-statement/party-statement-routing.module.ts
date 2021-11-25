import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartyStatementComponent} from './party-statement.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: PartyStatementComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyStatementRoutingModule { }