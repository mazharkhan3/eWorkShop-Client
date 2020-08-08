import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosListComponent } from './pos-list/pos-list.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { EndOfDayComponent } from './end-of-day/end-of-day.component';


@NgModule({
  declarations: [PosListComponent, SalesHistoryComponent, EndOfDayComponent],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
