import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BankStatementComponent} from './bank-statement.component';
  import { StatementformComponent } from "./statementform/statementform.component";
const routes: Routes = [
  {
    path: '',
    component: BankStatementComponent
  },
  {
    path: 'form',
    component: StatementformComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankStatementRoutingModule { }