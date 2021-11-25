import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'stockmaintenance', 
        loadChildren: './demo/ui-elements/ui-basic/ui-basic.module#UiBasicModule'
      },
      {
        path: 'supplier',
        loadChildren: './demo/pages/form-elements/form-elements.module#FormElementsModule'
      },
      {
        path: 'tables',
        loadChildren: './demo/pages/tables/tables.module#TablesModule'
      },
      {
        path: 'saless',
        loadChildren: './demo/pages/sales/saless.module#SalessModule'
      },
      {
        path: 'finance',
        loadChildren: './demo/pages/finance/finance.module#FinanceModule'
      },
      {
        path: 'products',
        loadChildren: './demo/pages/core-chart/core-chart.module#CoreChartModule'
      },
      {
        path: 'receiving',
        loadChildren: './demo/extra/sample-page/sample-page.module#SamplePageModule'
      },
      {
        path: 'oursupplier',
        loadChildren: './demo/extra/sample-page/sample-page.module#SamplePageModule'
      },
      {
        path: 'cashin',
        loadChildren: './demo/pages/cash-in/cashin/cashin.module#CashinModule'
      },
      {
        path: 'notes',
        loadChildren: './demo/pages/notes/notes.module#NoteModule'
      },
      {
        path: 'files',
        loadChildren: './demo/pages/files/file.module#FilesModule'
      },
      {
        path: 'report',
        loadChildren: './demo/report/report/report.module#ReportModule'
      },
      {
        path: 'security',
        loadChildren: './demo/pages/security/security.module#SecurityModule'
      },
      {
        path: 'storage',
        loadChildren: './demo/pages/storage/storage.module#StorageModule'
      },
     
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
