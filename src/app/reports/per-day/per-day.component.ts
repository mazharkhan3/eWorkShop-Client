import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as CanvasJS from "../../../canvasjs.min";
import { ReportsService } from "../shared/reports.service";

@Component({
  selector: "app-per-day",
  templateUrl: "./per-day.component.html",
  styleUrls: ["./per-day.component.scss"],
})
export class PerDayComponent implements OnInit {
  // week(){
  //   this.router.navigate(['reports','per-week'])
  // }
  // month(){
  //   this.router.navigate(['reports','per-month'])
  // }
  // year(){
  //   this.router.navigate(['reports','per-year'])
  // }

  constructor(private router: Router, private reportStats: ReportsService) {}

  ngOnInit() {
    this.getReportStats();
  }

  getReportStats() {
    this.reportStats.getReportStats().subscribe(
      (data: any) => {
        console.log(data);

        this.productsByMonth(data.ProductsByMonth);
        this.orderssByMonth(data.OrdersByMonth);
        this.salesByMonth(data.SalesByMonth);
      },
      (error) => {}
    );
  }

  productsByMonth(data) {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Total Products By Months",
      },
      data: [
        {
          type: "column",
          showInLengend: "true",
          indexLabel: "{label} - {y}",
          dataPoints: data,
        },
      ],
    });

    chart.render();
  }

  orderssByMonth(data) {
    let chart = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Total Orders By Months",
      },
      data: [
        {
          type: "line",
          showInLengend: "true",
          indexLabel: "{label} - {y}",
          dataPoints: data,
        },
      ],
    });

    chart.render();
  }

  salesByMonth(data) {
    let chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Total Sale By Months",
      },
      data: [
        {
          type: "pie",
          showInLengend: "true",
          indexLabel: "{label} - {y}",
          dataPoints: data,
        },
      ],
    });

    chart.render();
  }
}
