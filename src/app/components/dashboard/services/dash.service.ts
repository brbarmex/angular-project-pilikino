import { Injectable } from '@angular/core';
import { DashboardModel } from '../model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor() { }

  public getDashboardModel(): Promise<DashboardModel> {
    return new Promise<DashboardModel>((resolve, reject) => {
      resolve({
        cardTotalIn: 300.00,
        cardTotalOut: 200.00
      })
    })
  }
}
