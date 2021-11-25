import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import {SharedModule} from '../../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { DivitionformComponent } from './divitionform/divitionform.component';
import { DivitionComponent } from './divition.component';
import { DivisionRoutingModule } from './divition.routing.module';

@NgModule({
  imports: [
    CommonModule,
DivisionRoutingModule,
    SharedModule,
    DataTablesModule,
    ToastrModule.forRoot(),

  ],
  declarations: [DivitionformComponent,  DivitionComponent,]
})
export class DivitonModule { }
