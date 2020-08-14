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
    // this.getOrderList();
  }

  // getOrderList() {
  //   this.ticketsService.getOrderList().subscribe(
  //     data => {
  //       this.dataList = data;
  //       // alert('Save');
  //     },
  //     error => {
  //       alert(error.error.error_description);
  //     }
  //   );
  // }
  // addTicket(){
  //   this.router.navigate(['tickets','ticket-add'])
  // }
}
