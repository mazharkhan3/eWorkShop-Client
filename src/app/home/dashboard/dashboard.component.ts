import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {
    let checkLogin = this.dataService.checkLogin();
    if(!checkLogin){
      this.dataService.logout();
    }
   }

  ngOnInit() {
   
  }

  logOut(){
    this.dataService.logout();
  }

}
