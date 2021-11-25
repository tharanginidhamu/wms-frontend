import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'viewinvoice',
        loadChildren: './viewinvoice/viewinvoice.module#ViewinvoiceModule'
      },
      {
        path: 'returnproducts',
        loadChildren: './returnproducts/returnproducts.module#ReturnproductsModule'
      },
      {
        path: 'billing',
        loadChildren: './billing/billing.module#BillingModule'
      },
      {
        path: 'return',
        loadChildren: './productreturn/productreturn.module#ProductreturnModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalessRoutingModule { }