import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InventoryListComponent} from './inventory-list/inventory-list.component';
import{PromotionListComponent} from './promotion-list/promotion-list.component';
import{StockListComponent} from './stock-list/stock-list.component';
import{CategoryListComponent} from './category-list/category-list.component';
const routes: Routes = [
  {
  path: 'list',
  component: InventoryListComponent
  },
  {
    path:'promotion-list',
    component:PromotionListComponent

  },
  {
    path:'stock-list',
    component:StockListComponent
  },
  {
    path:'category-list',
    component:CategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
