import { Component, OnInit } from "@angular/core";
import { TicketsService } from "../shared";
import { Customer } from "src/app/models/customer";
import { CustomerService } from "src/app/customers/shared/customer.service";
import { Ticket } from "src/app/models/ticket";
import { TemplateType } from "src/app/models/TemplateType";
import { TicketInvoice } from "src/app/models/TicketInvoice";
import { Product } from "src/app/models/product";
import { debug } from "console";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
})
export class TicketFormComponent implements OnInit {
  totalCost: number = 0;

  // Lists
  customersList: Customer[];
  productsUIList: Product[] = [];

  ticketInvoicesList: TicketInvoice[] = [];

  // Objects
  customerInfoUI: Customer = new Customer();
  ticketObjUI: Ticket = new Ticket();
  templateTypesObjUI: TemplateType = new TemplateType();

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
    // loop through productsUIList and save the list to ticketInvoice

    this.productsUIList.map((x) => {
      let ticketInvoiceObjUI: TicketInvoice = new TicketInvoice();

      ticketInvoiceObjUI.Item = x.productName;
      ticketInvoiceObjUI.Unit_Cost = x.productCost;

      this.ticketInvoicesList.push(ticketInvoiceObjUI);
    });

    this.ticketObjUI.TicketInvoices = this.ticketInvoicesList;
    this.ticketObjUI.TemplateTypes.push(this.templateTypesObjUI);
    // console.log(this.ticketObjUI);
    debugger;
    this.ticketService.saveTicket(this.ticketObjUI).subscribe(
      (data) => {
        location.reload();
        // this.ticketsList.push(data);
        // clear obj
      },
      (error) => {
        console.log(error);
      }
    );
  }

  frontProducts(e: any) {
    let productsList: string[] = [];
    const productObj: Product = new Product();

    if (this.templateTypesObjUI.Front != undefined) {
      productsList = this.templateTypesObjUI.Front.split(",");
    }

    if (e.checked) {
      productsList.push(e.value);

      productObj.productName = e.value;
      productObj.productCost = this.randomNumber();

      this.productsUIList.push(productObj);
    } else {
      const index = productsList.indexOf(e.value, 0);

      if (index > -1) {
        productsList.splice(index, 1);
      }

      this.productsUIList = this.productsUIList.filter(
        (x) => x.productName != e.value
      );
    }

    this.templateTypesObjUI.Front = productsList.toString();
    console.log(this.templateTypesObjUI);
    this.calculateTotalCost();
  }

  rearProducts(e: any) {
    let productsList: string[] = [];
    const productObj: Product = new Product();

    if (this.templateTypesObjUI.Rear != undefined) {
      productsList = this.templateTypesObjUI.Rear.split(",");
    }

    if (e.checked) {
      productsList.push(e.value);

      productObj.productName = e.value;
      productObj.productCost = this.randomNumber();

      this.productsUIList.push(productObj);
    } else {
      const index = productsList.indexOf(e.value, 0);

      if (index > -1) {
        productsList.splice(index, 1);
      }

      this.productsUIList = this.productsUIList.filter(
        (x) => x.productName != e.value
      );
    }

    this.templateTypesObjUI.Rear = productsList.toString();
    console.log(this.templateTypesObjUI);
    this.calculateTotalCost();
  }

  otherProducts(e: any) {
    debugger;
    let productsList: string[] = [];
    const productObj: Product = new Product();

    if (this.templateTypesObjUI.Other != undefined) {
      productsList = this.templateTypesObjUI.Other.split(",");
    }

    if (e.checked) {
      productsList.push(e.value);

      productObj.productName = e.value;
      productObj.productCost = this.randomNumber();

      this.productsUIList.push(productObj);
    } else {
      const index = productsList.indexOf(e.value, 0);

      if (index > -1) {
        productsList.splice(index, 1);
      }

      this.productsUIList = this.productsUIList.filter(
        (x) => x.productName != e.value
      );
    }

    this.templateTypesObjUI.Other = productsList.toString();

    console.log(this.templateTypesObjUI, this.productsUIList);
    this.calculateTotalCost();
  }

  randomNumber() {
    return Math.floor(Math.random() * 5000);
  }

  getCurrentDate() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  calculateTotalCost() {
    var sum = 0;

    this.productsUIList.map((x) => {
      sum += x.productCost;
    });

    this.totalCost = sum;
  }
}
