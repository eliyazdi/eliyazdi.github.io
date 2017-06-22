import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  image: string;
  text: string;

  constructor(elm: ElementRef) {
    this.image = elm.nativeElement.getAttribute('image')
    this.text = elm.nativeElement.getAttribute('text')
  }

  ngOnInit() {
  }

}
