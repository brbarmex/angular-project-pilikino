import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css']
})
export class BasicCardComponent {
  @Input("card-title") cardTitle: string = "";
  @Input("card-subtitle") cardSubTitle: string = "";
  @Input("card-total-out") cardTotalOut: string = "";
  @Input("card-total-in") cardTotalIn: string = "";
  @Input("card-label-top") cardLabelTop: string = "";
  @Input("card-label-bottom") cardLabelBottom: string = "";
}