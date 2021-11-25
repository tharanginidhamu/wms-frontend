import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AccountformComponent } from "./accountform/accountform.component";

import { AccountRoutingModule} from './cashin-account-routing.module';
import { CashinAccountComponent } from './cashin-account.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({ 
  declarations: [CashinAccountComponent,AccountformComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),

    DataTablesModule
  ] 
})
export class AccountModule { }  
  