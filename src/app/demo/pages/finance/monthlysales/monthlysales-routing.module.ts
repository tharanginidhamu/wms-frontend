import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthlysalesComponent} from './monthlysales.component';

const routes: Routes = [
  {
    path: '',
    component: MonthlysalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlysalesRoutingModule { }
