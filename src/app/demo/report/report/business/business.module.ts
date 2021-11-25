import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRoutingModule } from './business-routing.module';
// import { TransactionComponent } from './demo/report/transaction/transaction.component';
import { BusinessComponent } from './business.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [
   BusinessComponent
],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule,
  ]
})
export class BusinessModule { }
