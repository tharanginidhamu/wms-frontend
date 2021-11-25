import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { HandRoutingModule} from './cashin-hand-routing.module';
import { CashinHandComponent } from './cashin-hand.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { HandformComponent } from "./handform/handform.component";
import { ToastrModule } from 'ngx-toastr';


@NgModule({ 
  declarations: [CashinHandComponent,HandformComponent],
  imports: [
    CommonModule,
    HandRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),

    DataTablesModule
  ] 
})
export class HandModule { }  
  