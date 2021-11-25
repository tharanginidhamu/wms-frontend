import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ProfitLossRoutingModule} from './profit-loss-routing.module';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ProfitLossComponent } from './profit-loss.component';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [ProfitLossComponent],
  imports: [
    CommonModule,
    ProfitLossRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class ProfitLossReportModule { }  
  