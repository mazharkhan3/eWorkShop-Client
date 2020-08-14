import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../shared/customer.service";
import { GenericRequests } from "src/app/GenericRequests/generic";
import { Customer } from "src/app/models/customer";
import { CustomerGroup } from "src/app/models/customerGroup";
import { debug } from "console";
import { CustomerFilters } from "src/app/models/customerFilters";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  customersList: Customer[];
  allCustomersList: Customer[];
  customerGroupsList: CustomerGroup[];
  customerUIObj: Customer = new Customer();
  customerUpdateUIObj: Customer = new Customer();
  userID: number;

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
        this.customersList = data;
        this.allCustomersList = data;
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
        this.clearData();
      },
      (error) => {
        alert("error");
      }
    );
  }

  deleteCustomer(id: any) {
    this.userID = id;
  }

  removeCustomer() {
    this.customerService.removeCustomer(this.userID).subscribe(
      (data: any) => {
        const index = this.customersList.findIndex(
          (d) => d.UserID === data.UserID
        );

        this.customersList.splice(index, 1);
      },
      (error) => {
        alert("error");
      }
    );
  }

  storeCustomerData(id: number, customerObj: Customer) {
    // Global Set Data
    this.customerUpdateUIObj = customerObj;
    this.userID = id;

    // Set In UI
    // this.customerGroupName = customerGroupObj.GroupName;
  }

  updateCustomer() {
    // set for server request data
    this.customerService
      .updateCustomer(this.userID, this.customerUpdateUIObj)
      .subscribe(
        (data) => {},
        (error) => {}
      );
  }

  clearData() {
    debugger;
    this.customerUIObj.Username = null;
    this.customerUIObj.Phonenumber = null;
    this.customerUIObj.Email = null;
    this.customerUIObj.Password = null;
    this.customerUIObj.Address = null;
    this.customerUIObj.Zip = null;
    this.customerUIObj.Km = null;
    this.customerUIObj.CustomerGroupID = null;
    this.customerUIObj.Note = null;
  }

  searchCustomerByName(customerName: string) {
    // reassign customerslist
    this.customersList = this.allCustomersList;

    this.customersList = this.customersList.filter((item) => {
      return (
        item.Username.toLowerCase().indexOf(customerName.toLowerCase()) >= 0
      );
    });
  }
}
