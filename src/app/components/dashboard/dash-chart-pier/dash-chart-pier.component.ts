import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from "ng2-charts";

@Component({
  selector: "app-dash-chart-pier",
  templateUrl: "./dash-chart-pier.component.html",
  styleUrls: ["./dash-chart-pier.component.css"],
})
export class DashChartPierComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "left",
    },
  };
  public pieChartLabels: Label[] = [
    "Cartão de crédito",
    "Alimentação",
    "Contas de consumo",
    "Emprestimos",
    "Outros"
  ];
  public pieChartData: SingleDataSet = [987.17, 500, 119.9, 1000,329];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: [
        "rgba(255,0,0,0.3)",
        "rgba(0,255,0,0.3)",
        "rgba(0,0,255,0.3)",
        "rgba(255,255,0,0.3)"
      ],
    },
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}
}
