import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [InventoryListComponent, PromotionListComponent, StockListComponent, CategoryListComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
