import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewinvoiceComponent } from './viewinvoice.component';
import { ViewinvoiceRoutingModule } from './viewinvoice-routing.module';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { InvoiceformComponent } from './invoiceform/invoiceform.component';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [ ViewinvoiceComponent,InvoiceformComponent ],
  imports: [
    CommonModule,
    ViewinvoiceRoutingModule,
    SharedModule,
    NgbDropdownModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPrintModule
  ]
})
export class ViewinvoiceModule { }
