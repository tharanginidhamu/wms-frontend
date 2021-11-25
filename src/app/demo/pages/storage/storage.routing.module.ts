import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'division',
        loadChildren: './divition/divition.module#DivitonModule'
      },
      {
        path: 'createdivison',
        loadChildren: './divisonadd/divison.module#AddDivisonModule'
      },
      {
        path: 'storageview',
        loadChildren: './storageview/storageview.module#StorageViewModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
