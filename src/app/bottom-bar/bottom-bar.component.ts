import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvapp-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  info: string = "Created by Boros Titusz using Angular 13";
  imageUrl: string = 'assets/logo.png';
  date: string = "2024.06.28";

  constructor() { }

  ngOnInit(): void {
  }

}
