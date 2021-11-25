
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'item-reportby-party',
        loadChildren: './item-reportby-party/item-reportby-party.module#ItemReportByItemModule'
      },
      {
        path: 'item-summary',
        loadChildren: './item-summary/item-summary.module#ItemSummaryModule'
      },
      {
        path: 'item-wise-profit',
        loadChildren: './item-wise-profit/item-wise-profit.module#ItemWiseProfitModule'
      },
      {
        path: 'itemdetail',
        loadChildren: './itemdetail-report/itemdetail-report.module#ItemDetailModule'
      },
      {
        path: 'lowstock',
        loadChildren: './lowstock-report/lowstock.module#LowStockModule'
      }
    
     
     
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemStockRoutingModule { }