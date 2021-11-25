
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuformComponent } from "./secuform/secuform.component";
import { SecurityComponent } from "./security.component";
const routes: Routes = [
  {
    path: '',
    component: SecurityComponent
  },
  {
    path: 'securityform',
    component: SecuformComponent
  },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'securityform',
  //       component: SecuformComponent
  //     }
     
  //   ]
  // } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }