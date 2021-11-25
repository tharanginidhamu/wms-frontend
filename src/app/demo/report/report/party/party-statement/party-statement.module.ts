import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { PartyStatementComponent} from './party-statement.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { PartyStatementRoutingModule } from './party-statement-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [PartyStatementComponent],
  imports: [
    CommonModule,
    PartyStatementRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class PartyStatementReportModule { }  
  