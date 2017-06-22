import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbox',
  templateUrl: './tabbox.component.html',
  styleUrls: ['./tabbox.component.css']
})
export class TabboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public popup(){
    alert("Coming soon :)")
  }

}
