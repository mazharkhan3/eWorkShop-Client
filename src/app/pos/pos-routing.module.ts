import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosListComponent } from './pos-list/pos-list.component';
import {SalesHistoryComponent} from './sales-history/sales-history.component';
import{EndOfDayComponent} from './end-of-day/end-of-day.component';

import { from } from 'rxjs';
const routes: Routes = [
  {
    path: 'list',
    component: PosListComponent
  },
  {
      path:'sales-history',
      component:SalesHistoryComponent
  },
  {
    path:'end-of-day',
    component: EndOfDayComponent

  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
