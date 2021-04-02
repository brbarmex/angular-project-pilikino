import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-out-in',
  templateUrl: './dashboard-card-out-in.component.html',
  styleUrls: ['./dashboard-card-out-in.component.css']
})
export class DashboardCardOutInComponent {
  @Input("card-title") cardTitle: string = "";
  @Input("card-subtitle") cardSubTitle: string = "";
  @Input("card-total-out") cardTotalOut: string = "";
  @Input("card-total-in") cardTotalIn: string = "";
  @Input("card-label-top") cardLabelTop: string = "";
  @Input("card-label-bottom") cardLabelBottom: string = "";
}