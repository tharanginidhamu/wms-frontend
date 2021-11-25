import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillingComponent} from './billing.component';
import { EditbillComponent } from './editbill/editbill.component';

const routes: Routes = [
  {
    path: '',
    component: BillingComponent
  },
  {
    path: 'editbill',
    component: EditbillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }