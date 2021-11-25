import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { BasicCollapseRoutingModule } from './basic-collapse-routing.module';
import { BasicCollapseComponent } from './basic-collapse.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { StockoutformComponent } from './stockoutform/stockoutform.component';

@NgModule({
  imports: [
    CommonModule,
    BasicCollapseRoutingModule,
    SharedModule,
    NgbCollapseModule,
    NgbAccordionModule,
    DataTablesModule
  ],
  declarations: [BasicCollapseComponent, StockoutformComponent]
})
export class BasicCollapseModule { }
