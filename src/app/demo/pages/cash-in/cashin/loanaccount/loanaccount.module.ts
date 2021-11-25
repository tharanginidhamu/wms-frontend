import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { LoanRoutingModule} from './loanaccount-routing.module';
import { LoanBankComponent } from './loanaccount.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { BankformComponent } from "./bankform/bankform.component";
import { ToastrModule } from 'ngx-toastr';


@NgModule({ 
  declarations: [LoanBankComponent,BankformComponent],
  imports: [
    CommonModule,
    LoanRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),

    DataTablesModule
  ] 
})
export class LoanModule { }  
  