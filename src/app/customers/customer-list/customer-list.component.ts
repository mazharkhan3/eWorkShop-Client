import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../shared/customer.service";
import { GenericRequests } from "src/app/GenericRequests/generic";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  customersList: any;
  customerGroupsList: any;
  customerUIObj: any = {};

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {
    this.getCustomers();
    this.getCustomerGroups();
  }

  ngOnInit() {}

  gotoCustomerGroup() {
    this.router.navigate(["customers", "customer-form"]);
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (data) => {
        debugger;
        console.log(data);
        this.customersList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCustomerGroups() {
    this.customerService.getCustomerGroups().subscribe(
      (data) => {
        this.customerGroupsList = data;
      },
      (error) => {
        alert("customer group error " + error);
      }
    );
  }

  addCustomer() {
    this.customerService.saveCustomer(this.customerUIObj).subscribe(
      (data) => {
        this.customersList.push(data);
        // clear obj
        this.customerUIObj.Username = "";
        this.customerUIObj.Phonenumber = "";
        this.customerUIObj.Email = "";
        this.customerUIObj.Password = "";
      },
      (error) => {
        alert("error");
      }
    );
  }
}
