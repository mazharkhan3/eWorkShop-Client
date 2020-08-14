import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DataService } from "src/app/shared/services/data.service";
import { Ticket } from "src/app/models/ticket";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TicketsService {
  /* Customer API */
  apiUrlGetTicket: string = "api/Tickets/GetTickets";
  apiUrlSaveTicket: string = "api/Tickets/SaveTicket";
  apiUrlDeleteTicket: string = "api/Tickets/DeleteTicket";
  apiUrlUpdateTicket: string = "api/Tickets/UpdateTicket";

  constructor(private dataService: DataService, private http: HttpClient) {}

  // getOrderList() {
  //   let headers = new HttpHeaders();
  //   headers = headers
  //     .set('Content-Type', 'application/json; charset=utf-8')
  //     .set('Authorization', 'Bearer ' + this.dataService.getToken());
  //   return this.http.get(environment.restApiUrl + this.apiOrderUrl, { headers });
  // }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(
      environment.restApiUrl + this.apiUrlGetTicket
    );
  }

  saveTicket(customer: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(
      environment.restApiUrl + this.apiUrlSaveTicket,
      customer
    );
  }

  updateTicket(id: number, customer: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(
      `${environment.restApiUrl}${this.apiUrlDeleteTicket}?id=${id}`,
      customer
    );
  }

  removeTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(
      `${environment.restApiUrl}${this.apiUrlUpdateTicket}?id=${id}`
    );
  }
}
