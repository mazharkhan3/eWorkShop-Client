import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/customers/shared/customer.service";
import { Customer } from "src/app/models/customer";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-settings-list",
  templateUrl: "./settings-list.component.html",
  styleUrls: ["./settings-list.component.scss"],
})
export class SettingsListComponent implements OnInit {
  user: Customer = new Customer();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.user = JSON.parse(this.dataService.getUser());
  }
}
