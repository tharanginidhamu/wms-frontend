import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { BalanceSheetComponent} from './balance-sheet.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [BalanceSheetComponent],
  imports: [
    CommonModule,
    BalanceSheetRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class BalanceSheetReportModule { }  
  