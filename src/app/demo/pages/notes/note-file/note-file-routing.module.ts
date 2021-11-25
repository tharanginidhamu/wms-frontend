import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteFileComponent} from './note-file.component';
import { NoteformComponent } from "./noteform/noteform.component";
const routes: Routes = [
  {
    path: '',
    component: NoteFileComponent
  },
  {
    path: 'noteform',
    component: NoteformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotefileRoutingModule { }