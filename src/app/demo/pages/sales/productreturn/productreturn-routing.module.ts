import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductreturnComponent} from './productreturn.component';
import { ReturnproductformComponent } from './returnproductform/returnproductform.component'

const routes: Routes = [
  {
    path: '',
    component: ProductreturnComponent
  },
  {
    path: 'returnform',
    component: ReturnproductformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductreturnRoutingModule { }