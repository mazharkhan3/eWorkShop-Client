import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../shared/customer.service";
import { CustomerGroup } from "src/app/models/customerGroup";

@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
  styleUrls: ["./customer-form.component.scss"],
})
export class CustomerFormComponent implements OnInit {
  customerGroups: CustomerGroup[];
  customerGroup: CustomerGroup = new CustomerGroup();
  customerGroupObj: CustomerGroup;
  customerGroupdID: number;
  customerGroupName: string;

  constructor(private customerService: CustomerService) {
    this.getCustomerGroups();
  }

  ngOnInit() {}

  getCustomerGroups() {
    this.customerService.getCustomerGroups().subscribe(
      (data) => {
        this.customerGroups = data;
      },
      (error) => {
        alert("customer group error " + error);
      }
    );
  }

  addCustomer() {
    this.customerService.saveCustomerGroup(this.customerGroup).subscribe(
      (data) => {
        this.customerGroups.push(data);
        // clear obj
        this.customerGroup.GroupName = "";
      },
      (error) => {
        alert("error");
      }
    );
  }

  deleteCustomerGroup(id: any) {
    this.customerGroupdID = id;
  }

  removeCustomerGroup() {
    this.customerService.removeCustomerGroup(this.customerGroupdID).subscribe(
      (data) => {
        const index = this.customerGroups.findIndex(
          (d) => d.CustomerGroupID === data.CustomerGroupID
        );

        this.customerGroups.splice(index, 1);
      },
      (error) => {
        alert("error");
      }
    );
  }

  storeCustomerGroupData(id: number, customerGroupObj: CustomerGroup) {
    // Global Set Data
    this.customerGroupObj = customerGroupObj;
    this.customerGroupdID = id;

    // Set In UI
    this.customerGroupName = customerGroupObj.GroupName;
  }

  updateCustomerGroup() {
    // set for server request data
    this.customerGroupObj.GroupName = this.customerGroupName;

    this.customerService
      .updateCustomerGroup(this.customerGroupdID, this.customerGroupObj)
      .subscribe(
        (data) => {},
        (error) => {}
      );
  }
}
