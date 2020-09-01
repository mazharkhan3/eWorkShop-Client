import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ProductModel } from "src/app/models/ProductModel";

@Injectable({
  providedIn: "root",
})
export class ReportsService {
  private apiUrlGetReportStats: string = "api/Reports/ReportsStats";

  constructor(private http: HttpClient) {}

  getReportStats() {
    return this.http.get(environment.restApiUrl + this.apiUrlGetReportStats);
  }
}
