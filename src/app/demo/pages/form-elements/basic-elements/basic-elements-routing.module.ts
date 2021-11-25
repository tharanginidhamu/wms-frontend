import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicElementsComponent} from './basic-elements.component';
import { SupplierformComponent } from './supplierform/supplierform.component';

const routes: Routes = [
  {
    path: '',
    component: BasicElementsComponent
  },
  {
    path: 'supplierdetails',
    component: SupplierformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicElementsRoutingModule { }
