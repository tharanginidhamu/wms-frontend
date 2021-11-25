import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import {SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 

@NgModule({ 
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
    NgbDropdownModule,
    Ng2SearchPipeModule,
    DataTablesModule
  ] 
})
export class SalesModule { }  
  