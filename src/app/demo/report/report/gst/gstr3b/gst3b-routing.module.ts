import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Gstr3bComponent} from './gstr3b.component';
//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: Gstr3bComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Gst3bReportRoutingModule { }