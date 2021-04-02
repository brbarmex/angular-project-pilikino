import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-chart-bar",
  templateUrl: "./chart-bar.component.html",
  styleUrls: ["./chart-bar.component.css"],
})
export class ChartBarComponent implements OnInit {
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
        "#FFA54F",
        "#7CFC00",
        "#CD1076",
        "#FA8072",
        "#00BFFF",
        "#9370DB",
        "#9ACD32",
        "#EEEE00",
        "#F4A460",
        "#B03060",
        "#FF0000",
        "#9400D3"
      ],
    },
  ];

  public barChartData: ChartDataSets[] = [
    { data: [3200, 1000, 1200, 350, 6000, 2500, 790, 3000,2000,3000,1000,800], label: "2021" },
  ];

  constructor() {}

  ngOnInit() {}
}
