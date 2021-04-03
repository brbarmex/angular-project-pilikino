import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-dash-chart-bar",
  templateUrl: "./dash-chart-bar.component.html"
})
export class DashChartBarComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: [
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0",
        "#A020F0"
      ],
    },
  ];

  public barChartData: ChartDataSets[] = [
    { data: [3200, 1000, 1200, 350, 6000, 2500, 790, 3000,2000,3000,1000,800], label: "2021" },
  ];

  constructor() {}

  ngOnInit() {}
}
