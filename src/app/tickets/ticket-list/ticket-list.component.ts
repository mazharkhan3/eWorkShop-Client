import { Component, OnInit } from "@angular/core";
import { TicketsService } from "../shared";
import { Router } from "@angular/router";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
})
export class TicketListComponent implements OnInit {
  dataList: any = [];

  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit() {
    this.getTicketsList();
  }

  getTicketsList() {
    this.ticketsService.getTickets().subscribe(
      (data) => {
        this.dataList = data;
      },
      (error) => {
        alert(error.error.error_description);
      }
    );
  }

  goToTicketForm() {
    this.router.navigate(["tickets", "ticket-add"]);
  }

  delete(ticketId: number) {
    this.ticketsService.removeTicket(ticketId).subscribe((res) => {
      this.getTicketsList();
    });
  }
}
