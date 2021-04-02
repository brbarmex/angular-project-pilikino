import { Component, OnInit } from "@angular/core";
import { CardBasicInterface } from "./dashboard.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  public in_out : CardBasicInterface = {
    title:"Totais",
    subtitle:"Resumo de entrada e saída do mês corrente:  ",
    out:"3.000,00",
    in:"8.000,00",
    labelTop:"Saída",
    labelBottom:"Entrada"
  }

  public outgoing : CardBasicInterface = {
    title:"Total Despesas",
    subtitle:"Resumo das despesas dos proximos meses:",
    out:"1.000,00",
    in:"1.000,00",
    labelTop:"Abril",
    labelBottom:"Maio"
  }

  constructor() {}

  ngOnInit(): void {}
}
