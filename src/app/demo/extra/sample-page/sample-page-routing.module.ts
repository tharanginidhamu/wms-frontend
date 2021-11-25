import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SamplePageComponent} from './sample-page.component';
import { ProductsformComponent } from './productsform/productsform.component';
import { SupplierComponent } from "./supplier/supplier.component";
import {  SuppliertableComponent} from "./suppliertable/suppliertable.component";
import { RecevingPCComponent } from "./receving-pc/receving-pc.component";
import { RecevingRFComponent } from "./receving-rf/receving-rf.component";
import { ReceiptorderComponent } from "./receiptorder/receiptorder.component";
import { ReceivFormComponent } from "./receving-pc/receiv-form/receiv-form.component";
const routes: Routes = [
  {
    path: '',
    component: SamplePageComponent
  },
  {
    path: 'receiveform',
    component: ReceivFormComponent
  },
  {
    path:'form',
    component: ProductsformComponent
  },
  {
    path:'receiptorder',
    component: ReceiptorderComponent
  },
  {
    path:'addsuppliers',
    component: SupplierComponent
  },
  {
    path:'suppliersdetail',
    component: SuppliertableComponent
  },
  {
    path:'receivingrf',
    component: RecevingPCComponent
  },
  {
    path:'receivingpc',
    component: RecevingRFComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule { }
