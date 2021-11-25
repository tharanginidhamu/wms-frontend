import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { ProductsformComponent } from './productsform/productsform.component';
import { ToastrModule } from 'ngx-toastr';
import { SupplierComponent } from './supplier/supplier.component';
import { SuppliertableComponent } from './suppliertable/suppliertable.component';
import { RecevingRFComponent } from './receving-rf/receving-rf.component';
import { RecevingPCComponent } from './receving-pc/receving-pc.component';
import { ReceiptorderComponent } from "./receiptorder/receiptorder.component";
import { ReceivFormComponent } from "./receving-pc/receiv-form/receiv-form.component";
@NgModule({
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    DataTablesModule,
    ToastrModule.forRoot(), 

  ],
  declarations: [SamplePageComponent,ReceivFormComponent, ProductsformComponent, SupplierComponent, SuppliertableComponent,ReceiptorderComponent, RecevingRFComponent, RecevingPCComponent]
})
export class SamplePageModule { }
