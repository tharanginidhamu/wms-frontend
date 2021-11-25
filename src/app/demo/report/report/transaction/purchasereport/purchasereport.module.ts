import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { PurchaseReportRoutingModule} from './purchasereport-routing.module';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { PurchasereportComponent } from './purchasereport.component';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [PurchasereportComponent],
  imports: [
    CommonModule,
    PurchaseReportRoutingModule,
    SharedModule,
    DataTablesModule
  ] 
})
export class PurchaseReportModule { }  
  