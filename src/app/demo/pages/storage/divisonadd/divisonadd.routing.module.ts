import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisonaddComponent } from './divisonadd.component';
import { DivisonformComponent } from './divisonform/divisonform.component';

const routes: Routes = [
  {
    path: '',
    component: DivisonaddComponent
  },
  {
    path: 'creatingdivision',
    component: DivisonformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDivisionRoutingModule { }
