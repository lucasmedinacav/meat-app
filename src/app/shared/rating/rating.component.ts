import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styles: [`.fa:hover{
    font-size:30px`]
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previousRate: number = 0;
  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  changeRate(index: number) {
    this.rate = index;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
