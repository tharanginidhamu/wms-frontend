import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalessRoutingModule } from './saless-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SalessRoutingModule,
    SharedModule
  ]
})
export class SalessModule { }
