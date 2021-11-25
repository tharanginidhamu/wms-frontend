import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ReciveRoutingModule } from './receving.routing.module';
// import { RecevingPCComponent } from './receving-pc.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReciveRoutingModule,
    SharedModule,
    NgbCollapseModule,
    NgbAccordionModule,
    DataTablesModule
  ],
  declarations: []
})
export class BasicCollapseModule { }
