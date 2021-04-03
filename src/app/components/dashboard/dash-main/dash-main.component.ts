import { Component, OnInit } from "@angular/core";
import { BalanceService } from "../services/balance.service";
import { DashService } from "../services/dash.service";

@Component({
  selector: "app-dash-main",
  templateUrl: "./dash-main.component.html",
  styleUrls: ["./dash-main.component.css"],
})
export class DashMainComponent implements OnInit {
  
  constructor(
    private dashboardService: DashService,
    private balanceService: BalanceService
  ) {
    this.loadComponents();
  }

  public loadComponents = async () => {
    let data = await this.dashboardService.getDashboardModel();
    this.balanceService.setOuts(data.cardTotalOut);
    this.balanceService.setBalance(data.cardTotalIn);
  };

  ngOnInit(): void {}
}
