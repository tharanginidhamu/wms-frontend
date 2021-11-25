import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security.routing.module';
import { DataTablesModule } from 'angular-datatables';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {secureService  } from "./security.service";
import {SharedModule} from '../../../theme/shared/shared.module';
import { SecuformComponent } from "./secuform/secuform.component";
 import {SecurityComponent  } from "./security.component";
@NgModule({
  declarations: [SecuformComponent,SecurityComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule,
    NgbCollapseModule,
    NgbAccordionModule,
    DataTablesModule,
  
  ],
  providers: [secureService],


})
export class SecurityModule { }
