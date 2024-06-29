import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cvapp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private elementRef:ElementRef, private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }

  email:string="titusz.boros@student.upt.ro";

  scrollToView() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // setTimeout(() => {
    //   window.scrollBy(0, -1);
    // }, 300); 
  }

  durationInSeconds=3;

  openSnackBar() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
      this.snackBar.open('Message sent!', 'DISCARD');
    } else {
      this.snackBar.open('Error!', 'DISCARD');
      // Optionally handle invalid form case
      // For example, display an error message or do not reset the form
    }
  }

}
