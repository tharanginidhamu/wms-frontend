import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemStockRoutingModule } from './item-stock-routing.module';
import { ItemStockComponent } from './item-stock.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [
  ItemStockComponent 
],
  imports: [
    CommonModule,
    ItemStockRoutingModule,
    SharedModule,
  ]
})
export class ItemStockModule { }
