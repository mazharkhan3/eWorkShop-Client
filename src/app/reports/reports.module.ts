import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { PerDayComponent } from './per-day/per-day.component';
import { PerWeekComponent } from './per-week/per-week.component';
import { ChartsModule } from 'ng2-charts';
import { PerMonthComponent } from './per-month/per-month.component';
import { PerYearComponent } from './per-year/per-year.component';

@NgModule({
  declarations: [PerDayComponent, PerWeekComponent, PerMonthComponent, PerYearComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule
  ]
})
export class ReportsModule { }
