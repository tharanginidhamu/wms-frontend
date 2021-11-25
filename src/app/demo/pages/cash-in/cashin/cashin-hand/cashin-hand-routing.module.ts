import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CashinHandComponent} from './cashin-hand.component';
import { HandformComponent } from "./handform/handform.component";
const routes: Routes = [
  {
    path: '',
    component: CashinHandComponent
  },
  {
    path: 'cashform',
    component: HandformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandRoutingModule { }