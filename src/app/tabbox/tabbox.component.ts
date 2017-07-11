import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabbox',
  templateUrl: './tabbox.component.html',
  styleUrls: ['./tabbox.component.css']
})
export class TabboxComponent implements OnInit {

  currentTab: number = 1
  @Output() onTab = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeTab(which: number){
    this.currentTab = which
    this.onTab.emit(this.currentTab)
  }

}
