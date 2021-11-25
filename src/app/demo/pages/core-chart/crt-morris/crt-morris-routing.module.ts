import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtMorrisComponent} from './crt-morris.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path: '',
    component: CrtMorrisComponent
  },
  {
    path: 'addproducts',
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtMorrisRoutingModule { }
