import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemdetailReportComponent} from './itemdetail-report.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ItemDetailRoutingModule } from './itemdetail-report-routing.module';


@NgModule({ 
  declarations: [ItemdetailReportComponent],
  imports: [
    CommonModule,
    ItemDetailRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class ItemDetailModule { }  
  