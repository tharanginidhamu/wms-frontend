import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemWiseProfitComponent} from './item-wise-profit.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ItemWiseRoutingModule } from './item-wise-profit-routing.module';


@NgModule({ 
  declarations: [ItemWiseProfitComponent],
  imports: [
    CommonModule,
    ItemWiseRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class ItemWiseProfitModule { }  
  