import { Component } from "@angular/core";

@Component({
  selector: "app-despesas-table",
  templateUrl: "./despesas-table.component.html",
  styleUrls: ["./despesas-table.component.css"],
})
export class DespesasTableComponent {
  displayedColumns = ["position", "name", "weight"];
  dataSource = ELEMENT_DATA;
}

export interface ExpenseResume {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: ExpenseResume[] = [
  { position: 1, name: "Mercado carrefour", weight: 1.0079 },
  { position: 2, name: "Extra supermercado", weight: 4.0026}
];