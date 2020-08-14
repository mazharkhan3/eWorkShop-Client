import { Component, OnInit } from "@angular/core";
import { TicketsService } from "../shared";
import { Customer } from "src/app/models/customer";
import { CustomerService } from "src/app/customers/shared/customer.service";
import { Ticket } from "src/app/models/ticket";
import { TemplateType } from "src/app/models/TemplateType";
import { TicketInvoice } from "src/app/models/TicketInvoice";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
})
export class TicketFormComponent implements OnInit {
  // Lists
  customersList: Customer[];
  ticketsList: Ticket[];
  templateTypesList: TemplateType[];
  ticketInvoicesList: TicketInvoice[];

  // Objects
  customerInfoUI: Customer = new Customer();
  ticketObjUI: Ticket = new Ticket();
  templateTypesObjUI: TemplateType = new TemplateType();
  ticketInvoiceObjUI: TicketInvoice = new TicketInvoice();

  constructor(
    private ticketService: TicketsService,
    private customerService: CustomerService
  ) {
    this.getCustomers();
  }

  ngOnInit() {}

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (data) => {
        this.customersList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateCustomerInfo(userID: any) {
    if (userID == "") this.customerInfoUI = new Customer();
    else
      this.customerInfoUI = this.customersList.find((x) => x.UserID == userID);
  }

  saveTicket() {
    this.templateTypesObjUI.Front = "Test";
    this.templateTypesObjUI.Rear = "Test";
    this.templateTypesObjUI.Other = "Test";

    this.ticketInvoiceObjUI.Item = "Test";
    this.ticketInvoiceObjUI.Description = "Test";
    this.ticketInvoiceObjUI.Unit_Cost = 22;
    this.ticketInvoiceObjUI.Quantity = 43;
    this.ticketInvoiceObjUI.Discount = 22;

    this.ticketObjUI.TicketInvoices.push(this.ticketInvoiceObjUI);
    this.ticketObjUI.TemplateTypes.push(this.templateTypesObjUI);
    console.log(this.ticketObjUI);
    this.ticketService.saveTicket(this.ticketObjUI).subscribe(
      (data) => {
        this.ticketsList.push(data);
        // clear obj
      },
      (error) => {
        alert("error");
      }
    );
  }
}
