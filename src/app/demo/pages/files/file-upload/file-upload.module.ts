import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { FileRoutingModule} from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { FileformComponent } from './fileform/fileform.component';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [FileUploadComponent, FileformComponent],
  imports: [
    CommonModule,
    FileRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class FileModule { }  
  