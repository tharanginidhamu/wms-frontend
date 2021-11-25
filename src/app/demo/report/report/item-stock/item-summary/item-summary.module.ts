import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemSummaryComponent} from './item-summary.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ItemSummaryRoutingModule } from './item-summary-routing.module';


@NgModule({ 
  declarations: [ItemSummaryComponent],
  imports: [
    CommonModule,
    ItemSummaryRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class ItemSummaryModule { }  
  