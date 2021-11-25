import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { DiscountComponent} from './discount.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { DiscountRoutingModule } from './discount-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [DiscountComponent],
  imports: [
    CommonModule,
    DiscountRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class DiscountModule { }  
  