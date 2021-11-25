import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { BankStatementComponent} from './bank-statement.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { BankStatementRoutingModule } from './bank-statement-routing.module';
import { StatementformComponent } from './statementform/statementform.component';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [BankStatementComponent, StatementformComponent],
  imports: [
    CommonModule,
    BankStatementRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class BankModule { }  
  