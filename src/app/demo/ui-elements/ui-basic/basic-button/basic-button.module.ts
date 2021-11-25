import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { BasicButtonRoutingModule } from './basic-button-routing.module';
import { BasicButtonComponent } from './basic-button.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbButtonsModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicButtonRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    DataTablesModule
  ],
  declarations: [BasicButtonComponent]
})
export class BasicButtonModule { }
