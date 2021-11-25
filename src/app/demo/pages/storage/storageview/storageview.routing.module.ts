import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageviewComponent } from './storageview.component';
// import { DivitionformComponent } from './divitionform/divitionform.component';

const routes: Routes = [
  {
    path: '',
    component: StorageviewComponent
  },
//   {
//     path: 'addstock',
//     component: DivitionformComponent
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageviewRoutingModule { }
