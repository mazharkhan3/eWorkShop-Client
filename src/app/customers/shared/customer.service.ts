import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  apiUrlGetUsers: string = "api/Users/GetUsers";

  /* Customer */
  apiUrlGetCustomer: string = "api/Users/GetUsers";
  apiUrlSaveCustomer: string = "api/Users/SaveUser";
  apiUrlDeleteCustomer: string = "api/Users/DeleteUser";
  apiUrlUpdateCustomer: string = "api/Users/UpdateUser";

  /* Customer Group */
  apiUrlGetCustomerGroups: string = "api/CustomerGroups/GetCustomerGroups";
  apiUrlSaveCustomerGroup: string = "api/CustomerGroups/SaveCustomerGroup";
  apiUrlDeleteCustomerGroup: string = "api/CustomerGroups/DeleteCustomerGroup";
  apiUrlUpdateCustomerGroup: string = "api/CustomerGroups/UpdateCustomerGroup";

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(environment.restApiUrl + this.apiUrlGetUsers);
  }

  saveCustomer(customer: any) {
    debugger;
    return this.http.post(
      environment.restApiUrl + this.apiUrlSaveCustomer,
      customer
    );
  }

  /* Customer Groups  */
  getCustomerGroups() {
    return this.http.get(environment.restApiUrl + this.apiUrlGetCustomerGroups);
  }

  saveCustomerGroup(customerGroup: any) {
    return this.http.post(
      environment.restApiUrl + this.apiUrlSaveCustomerGroup,
      customerGroup
    );
  }

  updateCustomerGroup(id: number, customerGroup: any) {
    debugger;
    return this.http.post(
      `${environment.restApiUrl}${this.apiUrlUpdateCustomerGroup}?id=${id}`,
      customerGroup
    );
  }

  removeCustomerGroup(id: number) {
    debugger;
    return this.http.get(
      `${environment.restApiUrl}${this.apiUrlDeleteCustomerGroup}?id=${id}`
    );
  }
}
