import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageRoutingModule } from "./storage.routing.module";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StorageRoutingModule,
    ToastrModule.forRoot(),

  ]
})
export class StorageModule { }
