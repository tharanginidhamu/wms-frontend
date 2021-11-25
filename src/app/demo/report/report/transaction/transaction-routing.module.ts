
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-transactions',
        loadChildren: './all-transaction/all-transaction.module#AllTransactionReportModule'
      },
      {
        path: 'balance-sheet',
        loadChildren: './balance-sheet/balance-sheet.module#BalanceSheetReportModule'
      },
      {
        path: 'cash-flow',
        loadChildren: './cashflow/cashflow.module#CashFlowReportModule'
      },
      {
        path: 'customertransaction',
        loadChildren: './day-book/day-book.module#DayBookReportModule'
      },
      {
        path: 'profit-loss',
        loadChildren: './profit-loss/profit-loss.module#ProfitLossReportModule'
      },
      {
        path: 'purchase-report',
        loadChildren: './purchasereport/purchasereport.module#PurchaseReportModule'
      },
      {
        path: 'sales-report',
        loadChildren: './salesreport/salesreport.module#SaleReportModule'
      }
     
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }