import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { SharedModule } from '../shared/modules/shared.module';
import { TicketFormComponent } from './ticket-form/ticket-form.component';


@NgModule({
  declarations: [TicketListComponent, TicketFormComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule
  ]
})
export class TicketsModule { }
