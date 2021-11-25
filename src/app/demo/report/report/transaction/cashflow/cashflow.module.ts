import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { CashflowComponent} from './cashflow.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { CashFlowRoutingModule } from './cashflow-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [CashflowComponent],
  imports: [
    CommonModule,
    CashFlowRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class CashFlowReportModule { }  
  