import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  mc = 0;
  mg1 = '../assets/img/img.png';
  mg = '';
  mv = [];
  constructor() {}

  ngOnInit() {}

  count(value) {
    this.mc = value;
    this.mg = this.mg1;
    this.mv[value] = value;
  }
}
