import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstRoutingModule } from './gst-routing.module';
// import { TransactionComponent } from './demo/report/transaction/transaction.component';
import { GstComponent } from './gst.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [
   GstComponent
],
  imports: [
    CommonModule,
    GstRoutingModule,
    SharedModule,
  ]
})
export class GstModule { }
