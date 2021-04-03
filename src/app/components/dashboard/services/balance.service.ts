import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private currentBalance = new Subject<number>();
  private outsRecents = new Subject<number>();

  currentBalance$ = this.currentBalance.asObservable();
  outsRecents$ = this.outsRecents.asObservable();

  setOuts(outs: number): void {
    this.outsRecents.next(outs);
  }

  setBalance(balance: number): void {
    this.currentBalance.next(balance);
  }

  updateBalance(balance: number){
    this.currentBalance.next(balance);
  }
}