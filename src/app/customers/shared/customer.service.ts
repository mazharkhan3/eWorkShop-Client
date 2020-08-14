import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { CustomerGroup } from "src/app/models/customerGroup";
import { Customer } from "src/app/models/customer";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  apiUrlGetUsers: string = "api/Users/GetUsers";

  /* Customer API */
  apiUrlGetCustomer: string = "api/Users/GetUsers";
  apiUrlSaveCustomer: string = "api/Users/SaveUser";
  apiUrlDeleteCustomer: string = "api/Users/DeleteUser";
  apiUrlUpdateCustomer: string = "api/Users/UpdateUser";

  /* Customer Group API*/
  apiUrlGetCustomerGroups: string = "api/CustomerGroups/GetCustomerGroups";
  apiUrlSaveCustomerGroup: string = "api/CustomerGroups/SaveCustomerGroup";
  apiUrlDeleteCustomerGroup: string = "api/CustomerGroups/DeleteCustomerGroup";
  apiUrlUpdateCustomerGroup: string = "api/CustomerGroups/UpdateCustomerGroup";

  constructor(private http: HttpClient) {}

  /* Customer */

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      environment.restApiUrl + this.apiUrlGetUsers
    );
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      environment.restApiUrl + this.apiUrlSaveCustomer,
      customer
    );
  }

  updateCustomer(id: number, customer: Customer): Observable<CustomerGroup> {
    return this.http.post<CustomerGroup>(
      `${environment.restApiUrl}${this.apiUrlUpdateCustomer}?id=${id}`,
      customer
    );
  }

  removeCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(
      `${environment.restApiUrl}${this.apiUrlDeleteCustomer}?id=${id}`
    );
  }

  /* Customer Groups  */

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(
      environment.restApiUrl + this.apiUrlGetCustomerGroups
    );
  }

  saveCustomerGroup(customerGroup: CustomerGroup): Observable<CustomerGroup> {
    return this.http.post<CustomerGroup>(
      environment.restApiUrl + this.apiUrlSaveCustomerGroup,
      customerGroup
    );
  }

  updateCustomerGroup(
    id: number,
    customerGroup: CustomerGroup
  ): Observable<CustomerGroup> {
    return this.http.post<CustomerGroup>(
      `${environment.restApiUrl}${this.apiUrlUpdateCustomerGroup}?id=${id}`,
      customerGroup
    );
  }

  removeCustomerGroup(id: number): Observable<CustomerGroup> {
    return this.http.get<CustomerGroup>(
      `${environment.restApiUrl}${this.apiUrlDeleteCustomerGroup}?id=${id}`
    );
  }
}
