import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  funcionou(teste: number) {
    console.log(teste + " funcionou");
  }

}
