
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-party-report',
        loadChildren: './allparty-report/allparty.module#AllPartyReportModule'
      },
      {
        path: 'party-report-by-item',
        loadChildren: './party-reportby-item/party-report.module#PartyReportModule'
      },
      {
        path: 'party-statement',
        loadChildren: './party-statement/party-statement.module#PartyStatementReportModule'
      },
     
     
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }