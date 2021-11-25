import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreChartRoutingModule } from './core-chart-routing.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    CoreChartRoutingModule,
    ToastrModule.forRoot(),

  ],
  declarations: []
})
export class CoreChartModule { }
