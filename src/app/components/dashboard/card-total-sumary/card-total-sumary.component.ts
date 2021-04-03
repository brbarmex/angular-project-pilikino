import { Component } from '@angular/core';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-card-total-sumary',
  templateUrl: './card-total-sumary.component.html'
})
export class CardTotalSumaryComponent {

  cardTotalIn: number = 0;
  cardTotalOut: number = 0;

  constructor(balanceService :BalanceService) {
    balanceService.outsRecents$.subscribe(out => this.cardTotalOut = out);
    balanceService.currentBalance$.subscribe(balance => this.cardTotalIn = balance);
  }
}
