import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvapp-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:string="About me";
  imageUrl:string='assets/logo.png';
  description:string="My name is Boros Titusz, I am a 22 year old university student at UPT, faculty of Automation and Computers. Welcome to my page where I showcase information about my professional skills and other projects."

}
