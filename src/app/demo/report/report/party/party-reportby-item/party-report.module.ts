import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { PartyReportbyItemComponent} from './party-reportby-item.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { PartyReportRoutingModule } from './party-reportby-item-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [PartyReportbyItemComponent],
  imports: [
    CommonModule,
    PartyReportRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class PartyReportModule { }  
  