import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicCollapseComponent} from './basic-collapse.component';
import { StockoutformComponent } from './stockoutform/stockoutform.component';

const routes: Routes = [
  {
    path: '',
    component: BasicCollapseComponent
  },
  {
    path: 'stockoutform',
    component: StockoutformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicCollapseRoutingModule { }
