//THIS IS MEANT FOR A LOCAL ONLY APP
//TO IMPLEMENT: HASH  STORED IN A DATABASE



import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cvapp-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent implements OnInit {

  password:String="admin";

  isAdmin:Boolean=false;


  ngOnInit(): void {
  }

  dialogRef: MatDialogRef<AdminDialogComponent>;

  constructor(dialogRef: MatDialogRef<AdminDialogComponent>) { 
    this.dialogRef=dialogRef;
  }

  onSubmit(form: any): void {
    const enteredPassword = form.value.password;
    console.log(enteredPassword);
    if (enteredPassword === this.password) {
      console.log("Privileges granted");
      this.isAdmin=true;
      form.reset();
      this.dialogRef.close(this.isAdmin); 
    } else {
      console.log("Incorrect password");
    }
    form.reset(); // Reset the form after submission
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}