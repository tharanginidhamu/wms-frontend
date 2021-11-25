import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditbillComponent } from './editbill/editbill.component';

@NgModule({
  declarations: [BillingComponent, EditbillComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule,
    NgxPrintModule
    // Ng2SearchPipeModule
  ]
})
export class BillingModule { }
