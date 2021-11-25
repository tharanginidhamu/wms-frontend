import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ChequeformComponent } from "./chequeform/chequeform.component";
import { ChequeRoutingModule} from './cashin-check-routing.module';
import { CashinCheckComponent } from './cashin-check.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({ 
  declarations: [CashinCheckComponent,ChequeformComponent],
  imports: [
    CommonModule,
    ChequeRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),

    DataTablesModule
  ] 
})
export class ChequeModule { }  
  