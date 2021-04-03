import { AdicionarSaldoComponent } from './../../adicionar-saldo/adicionar-saldo.component';
import { IncludeExpenseComponent } from '../../expense/include-expense/include-expense.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(type: number) {

    if (type === 1)
      this.dialog.open(IncludeExpenseComponent);

    else if (type == 4)
      this.dialog.open(AdicionarSaldoComponent);

  }
}
