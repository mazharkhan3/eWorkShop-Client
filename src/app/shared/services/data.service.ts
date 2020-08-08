import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router: Router
  ) { }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    let token = "";
    token = localStorage.getItem("token");
    return token;
  }

  checkLogin() {
    let login = false;
    let token = localStorage.getItem("token");
    if (token != null && token != "" && token != undefined) {
      login = true;
    }
    return login;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['auth', 'login']);
  }
}
