import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileUploadComponent} from './file-upload.component';
 import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes: Routes = [
  {
    path: '',
    component: FileUploadComponent
  },
  {
    path: 'load-file',
    component: FileformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }