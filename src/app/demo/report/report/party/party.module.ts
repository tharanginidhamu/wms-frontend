import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyRoutingModule } from './party-routing.module';
// import { TransactionComponent } from './demo/report/transaction/transaction.component';
import { PartyComponent } from './party.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [
   PartyComponent
],
  imports: [
    CommonModule,
    PartyRoutingModule,
    SharedModule,
  ]
})
export class PartyModule { }
