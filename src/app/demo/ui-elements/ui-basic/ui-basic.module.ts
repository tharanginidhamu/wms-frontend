import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBasicRoutingModule } from './ui-basic-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    UiBasicRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class UiBasicModule { }
