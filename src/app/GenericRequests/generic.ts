import { CustomerService } from "../customers/shared/customer.service";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GenericRequests {
  customerGroups: any;

  constructor(private customerService: CustomerService) {
    this.getCustomerGroups();
  }

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

  customerGroupsList() {
    return this.customerGroups;
  }
}
