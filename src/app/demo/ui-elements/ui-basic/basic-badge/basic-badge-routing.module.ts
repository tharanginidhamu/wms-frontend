import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicBadgeComponent} from './basic-badge.component';
import { StockavailformComponent } from './stockavailform/stockavailform.component';

const routes: Routes = [
  {
    path: '',
    component: BasicBadgeComponent
  },
  {
    path:'stockavailform',
    component: StockavailformComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicBadgeRoutingModule { }
