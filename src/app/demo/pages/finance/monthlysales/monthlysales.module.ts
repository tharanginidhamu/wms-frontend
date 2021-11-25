import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { MonthlysalesRoutingModule } from './monthlysales-routing.module';
import { MonthlysalesComponent } from './monthlysales.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [MonthlysalesComponent],
  imports: [
    CommonModule,
    MonthlysalesRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class MonthlysalesModule { }
