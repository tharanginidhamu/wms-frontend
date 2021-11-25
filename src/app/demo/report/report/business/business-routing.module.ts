
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bank-statement',
        loadChildren: './bank-statement/bank-statement.module#BankModule'
      },
      {
        path: 'discount',
        loadChildren: './discount/discount.module#DiscountModule'
      },
      {
        path: 'tax',
        loadChildren: './tax/tax.module#TaxModule'
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }