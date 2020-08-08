import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerDayComponent } from './per-day/per-day.component';
import { PerWeekComponent } from "./per-week/per-week.component";
import {  PerMonthComponent} from "./per-month/per-month.component";
import { PerYearComponent } from "./per-year/per-year.component";

const routes: Routes = [
  {
    path: 'list',
  component: PerDayComponent
  },
  {
    path: 'per-week',
  component: PerWeekComponent
  },
  {
    path: 'per-month',
  component: PerMonthComponent
  },
  {
    path: 'per-year',
  component: PerYearComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
