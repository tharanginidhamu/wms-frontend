import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
// import { TransactionComponent } from './demo/report/transaction/transaction.component';
import { TransactionComponent } from './transaction.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [
   TransactionComponent
],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule,
  ]
})
export class TransactionModule { }
