import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerhistoryComponent } from './customerhistory.component';
import {CustomerhistorydetailsComponent} from './customerhistorydetails/customerhistorydetails.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerhistoryComponent
  },
  {
    path:'history',
    component: CustomerhistorydetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerhistoryRoutingModule { }
