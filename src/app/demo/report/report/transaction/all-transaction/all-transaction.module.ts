import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { AllTransactionComponent} from './all-transaction.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { AllTransactionRoutingModule } from './all-transaction-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [AllTransactionComponent],
  imports: [
    CommonModule,
    AllTransactionRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class AllTransactionReportModule { }  
  