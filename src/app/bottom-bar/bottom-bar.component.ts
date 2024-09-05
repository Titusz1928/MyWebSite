import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { AdminModeService } from '../services/admin-mode.service';

@Component({
  selector: 'cvapp-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  info: string = "Created by Boros Titusz using Angular 13";
  imageUrl: string = 'assets/logo.png';
  date: string = "2024.06.28";
  
  darkMode = false;
  isAdmin:boolean=false;

  @HostBinding('class') activeThemeClass: string = 'light-mode';

  constructor(private dialog: MatDialog, public darkModeService:DarkmodeService, private AdminModeService:AdminModeService) { }

  ngOnInit(): void {
    // Retrieve dark mode preference from localStorage (if used)
    const darkModeStored = localStorage.getItem('darkMode');
    if (darkModeStored) {
      this.darkMode = JSON.parse(darkModeStored);
      this.activeThemeClass = this.darkMode ? 'dark-mode' : 'light-mode';
    }
  }

  changeState() {
    console.log('Toggle clicked');
    this.darkMode = !this.darkMode;
    this.activeThemeClass = this.darkMode ? 'dark-mode' : 'light-mode';
    console.log('Dark mode:', this.darkMode);
    console.log('Active theme class:', this.activeThemeClass);
    
    // Store dark mode preference in localStorage (optional)
    //localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.changeState();
  }

  handleClick(){
    if(this.isAdmin){
      this.isAdmin=false;
    }else{
      const dialogRef = this.dialog.open(AdminDialogComponent);

      dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
        // Update the component's canEdit property
        this.isAdmin = result === true;
        this.AdminModeService.setCanEdit(this.isAdmin); // Update the service with the new value
        console.log('The dialog was closed');
        console.log('canEdit:', this.isAdmin);
      });
    }
  }

}
