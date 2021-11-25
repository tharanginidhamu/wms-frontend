import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { CrtMorrisRoutingModule } from './crt-morris-routing.module';
import { CrtMorrisComponent } from './crt-morris.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  imports: [
    CommonModule,
    CrtMorrisRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CrtMorrisComponent, ProductdetailsComponent]
})
export class CrtMorrisModule { }
