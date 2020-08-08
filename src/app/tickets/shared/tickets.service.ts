import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  apiOrderUrl: string = 'api/Orders'
  apiTicketsUrl: string = 'api/Ticket'

  constructor(
    private dataService: DataService,
    private http: HttpClient,
  ) { }

  getOrderList() {
    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', 'Bearer ' + this.dataService.getToken());
    return this.http.get(environment.restApiUrl + this.apiOrderUrl, { headers });
  }
  
}
