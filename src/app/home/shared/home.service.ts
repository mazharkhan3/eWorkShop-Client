import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  apiUrlDashboardStats: string = "api/Dashboard/DashboardStats";

  constructor(private http: HttpClient) {}

  getDashboardStats() {
    return this.http.get(
      `${environment.restApiUrl}${this.apiUrlDashboardStats}`
    );
  }
}
