import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { CustomerhistoryRoutingModule } from './customerhistory-routing.module';
import { CustomerhistoryComponent } from './customerhistory.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { CustomerhistorydetailsComponent } from './customerhistorydetails/customerhistorydetails.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerhistoryRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CustomerhistoryComponent, CustomerhistorydetailsComponent]
})
export class CustomerhistoryModule { } 