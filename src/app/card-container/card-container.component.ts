import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvapp-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    { title: 'Card 1', imageUrl: 'assets/logo.png', description: 'Description for Card 1' },
    { title: 'Card 2', imageUrl: 'assets/logo.png', description: 'Description for Card 2' },
    { title: 'Card 3', imageUrl: 'assets/logo.png', description: 'Description for Card 3' }
  ];

}
