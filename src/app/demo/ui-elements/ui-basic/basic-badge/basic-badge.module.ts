import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { BasicBadgeRoutingModule } from './basic-badge-routing.module';
import { BasicBadgeComponent } from './basic-badge.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StockavailformComponent } from './stockavailform/stockavailform.component';

@NgModule({
  imports: [
    CommonModule,
    BasicBadgeRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    DataTablesModule
  ],
  declarations: [BasicBadgeComponent, StockavailformComponent]
})
export class BasicBadgeModule { }
