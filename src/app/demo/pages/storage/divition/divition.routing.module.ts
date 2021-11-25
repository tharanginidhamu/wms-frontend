import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivitionComponent } from './divition.component';
import { DivitionformComponent } from './divitionform/divitionform.component';

const routes: Routes = [
  {
    path: '',
    component: DivitionComponent
  },
  {
    path: 'addstock',
    component: DivitionformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
