
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'purchase',
        loadChildren: './purchase/purchase.module#PurchaseModule'
      },
      {
        path: 'sales',
        loadChildren: './sales/sales.module#SalesModule'
      },
      {
        path: 'customerhistory',
        loadChildren: './customerhistory/customerhistory.module#CustomerhistoryModule'
      },
      {
        path: 'monthlysales',
        loadChildren: './monthlysales/monthlysales.module#MonthlysalesModule'
      },
      {
        path: 'outstanding',
        loadChildren: './outstanding/outstanding.module#OutstandingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }