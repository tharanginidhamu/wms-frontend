import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { DayBookRoutingModule} from './day-book-routing.module';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { DayBookComponent } from './day-book.component';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [DayBookComponent],
  imports: [
    CommonModule,
    DayBookRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class DayBookReportModule { }  
  