import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewinvoiceComponent } from './viewinvoice.component';
import { InvoiceformComponent } from './invoiceform/invoiceform.component';

const routes: Routes = [
  {
    path: '',
    component: ViewinvoiceComponent
  },
  {
    path: 'invoiceform',
    component: InvoiceformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewinvoiceRoutingModule { }