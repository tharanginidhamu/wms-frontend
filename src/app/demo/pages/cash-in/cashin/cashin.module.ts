import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashInRoutingModule } from './cashin-routing.module';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CashInRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    // DataTablesModule
  ]
})
export class CashinModule { }
