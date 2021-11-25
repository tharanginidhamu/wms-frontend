import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { NotefileRoutingModule} from './note-file-routing.module';
import { NoteFileComponent } from './note-file.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [NoteFileComponent,NoteformComponent],
  imports: [
    CommonModule,
    NotefileRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class NotefileModule { }  
  