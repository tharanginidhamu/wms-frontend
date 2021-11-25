import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import {SharedModule} from '../../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { DivisonformComponent } from './divisonform/divisonform.component';
import { DivisonaddComponent } from './divisonadd.component';
import { AddDivisionRoutingModule } from './divisonadd.routing.module';

@NgModule({
  imports: [
    CommonModule,
 AddDivisionRoutingModule,
    SharedModule,
    DataTablesModule,
    ToastrModule.forRoot(),

  ],
  declarations: [DivisonformComponent,  DivisonaddComponent,]
})
export class AddDivisonModule { }
