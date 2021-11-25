import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ExpensiveRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { ExpenseformComponent } from './expenseform/expenseform.component';

@NgModule({
  imports: [
    CommonModule,
    ExpensiveRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ExpenseComponent, ExpenseformComponent]
})
export class expensiveModule { }
