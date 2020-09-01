import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../shared/authentication.service";
import { error } from "protractor";
import { Router } from "@angular/router";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  login: any = {};
  response: String;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    localStorage.removeItem("token");
  }

  postLogin() {
    this.authenticationService.login(this.login).subscribe(
      (data) => {
        this.dataService.setToken(data["access_token"]);
        this.dataService.setUser(JSON.stringify(data));
        this.router.navigate(["home", "dashboard"]);
      },
      (error) => {
        this.response = error.error.Message;
      }
    );
  }
}
