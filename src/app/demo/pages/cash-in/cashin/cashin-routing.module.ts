
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cashin-bank',
        loadChildren: './cashin-account/cashin-account.module#AccountModule'
      },
      {
        path: 'cashin-cheque',
        loadChildren: './cashin-check/cashin-check.module#ChequeModule'
      },
      {
        path: 'cashin-hand',
        loadChildren: './cashin-hand/cashin-hand.module#HandModule'
      },
      {
        path: 'loan',
        loadChildren: './loanaccount/loanaccount.module#LoanModule'
      }
    //   {
    //     path: 'outstanding',
    //     loadChildren: './outstanding/outstanding.module#OutstandingModule'
    //   }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashInRoutingModule { }