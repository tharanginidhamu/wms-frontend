import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { StorageviewComponent } from './storageview.component';
import { StorageviewRoutingModule } from './storageview.routing.module';

@NgModule({
  imports: [
    CommonModule,
    StorageviewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ StorageviewComponent,]
})
export class StorageViewModule { }
