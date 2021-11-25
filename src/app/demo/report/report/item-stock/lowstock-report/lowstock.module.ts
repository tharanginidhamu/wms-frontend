import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { LowstockReportComponent} from './lowstock-report.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { LowStockRoutingModule } from './lowstock-report-routing.module';


@NgModule({ 
  declarations: [LowstockReportComponent],
  imports: [
    CommonModule,
    LowStockRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class LowStockModule { }  
  