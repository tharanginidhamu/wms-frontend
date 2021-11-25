import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inwards',
        loadChildren: './basic-button/basic-button.module#BasicButtonModule'
      },
      {
        path: 'stock',
        loadChildren: './basic-badge/basic-badge.module#BasicBadgeModule'
      },
      {
        path: 'outwards',
        loadChildren: './basic-collapse/basic-collapse.module#BasicCollapseModule'
      },
      {
        path: 'availability',
        loadChildren: './basic-typography/basic-typography.module#BasicTypographyModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
