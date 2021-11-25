import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { Gstr3bComponent} from './gstr3b.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { Gst3bReportRoutingModule } from './gst3b-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [Gstr3bComponent],
  imports: [
    CommonModule,
    Gst3bReportRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class Gst3bReportModule { }  
  