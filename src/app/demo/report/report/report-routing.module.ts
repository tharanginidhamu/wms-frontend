
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'transaction',
        loadChildren: './transaction/transaction.module#TransactionModule'
      },
      {
        path: 'party',
        loadChildren: './party/party.module#PartyModule'
      },
      {
        path: 'gstr',
        loadChildren: './gst/gst.module#GstModule'
      },
      {
        path: 'item-stock',
        loadChildren: './item-stock/item-stock.module#ItemStockModule'
      },
      {
        path: 'business-status',
        loadChildren: './business/business.module#BusinessModule'
      }   
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }