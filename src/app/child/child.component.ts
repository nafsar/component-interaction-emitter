import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="child-line"></div>
  <div class="child-color"> Child component</div>
  <div class="dwn">
  <button class="button" (click)="theCounted()"><span class="child-color">Add pumpkin to Parent component</span></button>
  </div>
  `
})
export class ChildComponent implements OnInit {

  @Output() theCount = new EventEmitter();

  value = 0;
  constructor() {}

  ngOnInit() {}

  theCounted() {
    this.value = this.value + 1;
    this.theCount.emit(this.value);
  }
}
