import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';


const routes: Routes = [
  {
    path: 'list',
    component: TicketListComponent
  },
  {
    path: 'ticket-add',
    component: TicketFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
