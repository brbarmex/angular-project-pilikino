import { Component, OnInit } from "@angular/core";
import { BalanceService } from "../services/balance.service";
import { DashService } from "../services/dash.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  
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
