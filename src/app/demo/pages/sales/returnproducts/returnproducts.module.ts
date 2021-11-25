import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnproductsComponent } from './returnproducts.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReturnproductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class ReturnproductsModule { }
