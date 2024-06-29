import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';

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

  @HostBinding('class') activeThemeClass: string = 'light-mode';

  constructor(public darkModeService:DarkmodeService) { }

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

}
