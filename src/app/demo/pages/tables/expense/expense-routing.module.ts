import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpenseComponent} from './expense';
import { ExpenseformComponent } from "./expenseform/expenseform.component";
const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent
  },
  {
    path: 'expenseform',
    component: ExpenseformComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensiveRoutingModule { }
