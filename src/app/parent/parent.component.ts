import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <app-child (theCount)="count($event)"></app-child>
  <div class="line"></div>
  <div class="parent-color">Parent component</div>
  <div class="badge">{{mc}}</div>
  <div style="margin-top:70px;">
  <span *ngFor="let i of mv" >
  <span *ngIf="i > 0"><img src="{{mg}}">&nbsp;</span>
  </span>
  </div>
  `
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
