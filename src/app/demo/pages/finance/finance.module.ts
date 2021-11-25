import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule,
    // DataTablesModule
  ]
})
export class FinanceModule { }
