import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  currentTab: number = 1
  blogJSON: any

  constructor(http: Http) {
    http.get('http://orbitmgt.com:3333')
      .map(res => res.json())
      .subscribe(rss => this.blogJSON = rss.feed);
   }

  ngOnInit() {
  }

  changeTab(which){
    this.currentTab = which;
  }

}
