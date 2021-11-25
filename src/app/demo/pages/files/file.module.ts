import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesRoutingModule } from './file-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilesRoutingModule,
    SharedModule,
  ]
})
export class FilesModule { }
