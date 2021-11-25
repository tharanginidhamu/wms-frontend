import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { TaxComponent} from './tax.component';
// import { FileUploadComponent } from './fi';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { TaxRoutingModule } from './tax-routing.module';
// import { NoteformComponent } from "./noteform/noteform.component";


@NgModule({ 
  declarations: [TaxComponent],
  imports: [
    CommonModule,
    TaxRoutingModule,
    SharedModule,
    
    DataTablesModule
  ] 
})
export class TaxModule { }  
  