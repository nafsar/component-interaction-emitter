import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
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
