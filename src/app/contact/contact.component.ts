import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';

@Component({
  selector: 'cvapp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private elementRef:ElementRef, private snackBar: MatSnackBar, private formBuilder: FormBuilder, private netlifyForms: NetlifyFormsService) { }

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

  errorMsg="error";

  openSnackBar() {
    if (this.contactForm.valid) {
      this.snackBar.open('Message sent!', 'CLOSE');
    } else {
      this.snackBar.open('Error!', 'CLOSE');
      // Optionally handle invalid form case
      // For example, display an error message or do not reset the form
    }
    this.netlifyForms.submitContact(this.contactForm.value).subscribe(
      () => {
        this.contactForm.reset();
        console.log("ok");
      },
      err => {
        this.errorMsg = err;
        console.log(this.errorMsg);
      }
    );


  }

}
