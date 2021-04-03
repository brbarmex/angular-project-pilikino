import { BalanceService } from '../dashboard/services/balance.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-adicionar-saldo',
  templateUrl: './adicionar-saldo.component.html',
  styleUrls: ['./adicionar-saldo.component.css']
})
export class AdicionarSaldoComponent implements OnInit {

  currentBalance: number = 0;
  balance = new FormControl('');

  constructor(private balanceService :BalanceService) { }

  ngOnInit(): void {
  }

  addBalance(): void {
    this.balanceService.updateBalance(this.balance.value);
    console.log(this.balance.value)
  }
}
