import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';
import { DefaultComponent } from './default.component';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

// import { CrtMorrisComponent } from '../../pages/core-chart/crt-morris/crt-morris.component';
import { CoreChartRoutingModule } from '../../pages/core-chart/core-chart-routing.module';
import {MorrisJsModule } from 'angular-morris-js';

@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
    NgbTabsetModule,
    CoreChartRoutingModule,

    MorrisJsModule
  ],
  declarations: [DefaultComponent]
})
export class DefaultModule { }
