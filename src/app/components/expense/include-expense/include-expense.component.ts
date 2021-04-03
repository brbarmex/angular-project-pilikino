import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-include-expense',
  templateUrl: './include-expense.component.html',
  styleUrls: ['./include-expense.component.css']
})
export class IncludeExpenseComponent implements OnInit {

  showSelectOptionForPart : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setPart(value: boolean): void {
      this.showSelectOptionForPart = value;
      console.log(this.showSelectOptionForPart)
  }
}
