import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { OutstandingRoutingModule } from './outstanding-routing.module';
import { OutstandingComponent } from './outstanding.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OutstandingRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [OutstandingComponent]
})
export class OutstandingModule { }