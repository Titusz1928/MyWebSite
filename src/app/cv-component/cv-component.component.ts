import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'cvapp-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.scss']
})
export class CvComponentComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToView() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // setTimeout(() => {
    //   window.scrollBy(0, -1);
    // }, 300); 
  }

  downloadPDF(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/pdf/BorosTitusz_CV_ENG_2024_06.pdf'); // Replace with your PDF file path
    link.setAttribute('download', 'BorosTitusz_CV_ENG_2024_06.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}