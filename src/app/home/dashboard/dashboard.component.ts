import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { HomeService } from "../shared/home.service";
import * as CanvasJS from "../../../canvasjs.min";
import { debug } from "console";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  userName: String = "";
  dashboardStats: any = {};

  constructor(
    private dataService: DataService,
    private homeService: HomeService
  ) {
    let checkLogin = this.dataService.checkLogin();
    if (!checkLogin) {
      this.dataService.logout();
    }
  }

  ngOnInit() {
    this.userName = JSON.parse(this.dataService.getUser()).Username || "Guest";

    // // get dashboard stas
    this.getDashboardStats();

    debugger;

    // const chartSales = new CanvasJS.Chart("chartContainer1", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Orders Per Day",
    //   },
    //   data: [
    //     {
    //       type: "line",
    //       indexLabelFontSize: 16,
    //       dataPoints: [
    //         { y: 450 },
    //         { y: 414 },
    //         { y: 520 },
    //         { y: 460 },
    //         { y: 450 },
    //         { y: 500 },
    //         { y: 480 },
    //         { y: 480 },
    //         { y: 410 },
    //         { y: 500 },
    //         { y: 480 },
    //         { y: 510 },
    //       ],
    //     },
    //   ],
    // });
    // chartSales.render();
  }

  logOut() {
    this.dataService.logout();
  }

  getDashboardStats() {
    this.homeService.getDashboardStats().subscribe(
      (data: any) => {
        this.dashboardStats = data;

        this.loadOverAllGraph();
      },
      (error) => {}
    );
  }

  loadOverAllGraph() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Overall Stats (Graphs)",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: this.dashboardStats.Users, label: "Users" },
            { y: this.dashboardStats.Products, label: "Products" },
            { y: this.dashboardStats.Orders, label: "Orders" },
          ],
        },
      ],
    });

    chart.render();
  }
}
