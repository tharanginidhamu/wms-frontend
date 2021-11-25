import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CashinAccountComponent} from './cashin-account.component';
import { AccountformComponent } from "./accountform/accountform.component";

const routes: Routes = [
  {
    path: '',
    component: CashinAccountComponent
  },
  {
    path: 'bankform',
    component: AccountformComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }