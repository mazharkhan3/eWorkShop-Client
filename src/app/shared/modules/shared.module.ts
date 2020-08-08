import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'ng-angular8-datatable';
 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataTableModule
  ],
  exports: [
    DataTableModule
  ]
})
export class SharedModule { }
