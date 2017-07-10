import { Component, OnInit } from '@angular/core';
declare var teste: any;

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnTeste() {
    console.log('bateu no component');
    teste.testeleo();
  }
}
