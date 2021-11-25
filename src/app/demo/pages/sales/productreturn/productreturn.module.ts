import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ProductreturnComponent } from './productreturn.component';
import { ProductreturnRoutingModule } from './productreturn-routing.module';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { ReturnproductformComponent } from './returnproductform/returnproductform.component';

@NgModule({
  declarations: [ProductreturnComponent, ReturnproductformComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductreturnRoutingModule,
    DataTablesModule
  ]
})
export class ProductreturnModule { }
