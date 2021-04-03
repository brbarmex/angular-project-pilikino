import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incluir-despesa',
  templateUrl: './incluir-despesa.component.html',
  styleUrls: ['./incluir-despesa.component.css']
})
export class IncluirDespesaComponent implements OnInit {

  showSelectOptionForPart : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setPart(value: boolean): void {
      this.showSelectOptionForPart = value;
      console.log(this.showSelectOptionForPart)
  }
}
