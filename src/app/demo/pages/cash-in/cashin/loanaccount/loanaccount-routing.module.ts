import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoanBankComponent} from './loanaccount.component';
import { BankformComponent } from "./bankform/bankform.component";
const routes: Routes = [
  {
    path: '',
    component: LoanBankComponent
  },
  {
    path: 'bankform',
    component: BankformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }