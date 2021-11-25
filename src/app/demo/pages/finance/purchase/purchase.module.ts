import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { PurchaseComponent } from './purchase.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule, 
    PurchaseRoutingModule,
    SharedModule,
    NgbDropdownModule,
    DataTablesModule,
    DateRangePickerModule
  ],

})
export class PurchaseModule { }
