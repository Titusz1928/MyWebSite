import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'cvapp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }
  email:string="titusz.boros@student.upt.ro";

  scrollToView() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // setTimeout(() => {
    //   window.scrollBy(0, -1);
    // }, 300); 
  }
}
