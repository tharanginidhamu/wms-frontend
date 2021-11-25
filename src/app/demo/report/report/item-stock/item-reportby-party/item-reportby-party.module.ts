import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemReportbyPartyComponent} from './item-reportby-party.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ItemReportByItemRoutingModule } from './item-reportby-party-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [ItemReportbyPartyComponent],
  imports: [
    CommonModule,
    ItemReportByItemRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class ItemReportByItemModule { }  
  