import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  currentTab: number = 1

  constructor() { }

  ngOnInit() {
  }

  changeTab(which){
    this.currentTab = which;
  }

}
