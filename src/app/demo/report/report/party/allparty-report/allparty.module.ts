import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { AllpartyReportComponent} from './allparty-report.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { AllPartyReportRoutingModule } from './allparty-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [AllpartyReportComponent],
  imports: [
    CommonModule,
    AllPartyReportRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class AllPartyReportModule { }  
  