import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl:string = 'api/Accounts/Login'

  constructor(private http: HttpClient) { }


  // login(login:any) {
  //   return this.http.post(environment.restApiUrl + this.apiUrl,
  //     "grant_type=password&username="+ login.username +"&password="+ login.password+""
  //     );
  // }

  login(login:any){
    return this.http.post(environment.restApiUrl + this.apiUrl, login);
  }

}
