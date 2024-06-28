import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'cvapp-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  // @Input() title: string = "Not implemented";
  // @Input() imageUrl: string = 'assets/logo.png';
  // @Input() description: string = "This card is only for development";

  title: string = "Not implemented";
  imageUrl: string = 'assets/logo.png';
  description: string = "This card is only for development";

  constructor(private elementRef: ElementRef) {}

  scrollToView() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
