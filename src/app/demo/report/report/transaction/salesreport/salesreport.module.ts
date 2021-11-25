import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { SaleReportRoutingModule} from './salesreport-routing.module';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { SalesreportComponent } from './salesreport.component';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [SalesreportComponent],
  imports: [
    CommonModule,
    SaleReportRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class SaleReportModule { }  
  