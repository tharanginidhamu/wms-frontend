import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecevingPCComponent} from './receving-pc.component';
// import { ReceivFormComponent } from './receiv-form/receiv-form.component';

const routes: Routes = [
  {
    path: '',
    component: RecevingPCComponent
  },
  // {
  //   path: 'receiveform',
  //   component: ReceivFormComponent
  // }

  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'receiveform',
  //       component: ReceivFormComponent
  //     },
     
  //   ]
  // } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReciveRoutingModule { }
