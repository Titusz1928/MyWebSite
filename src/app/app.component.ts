import { Component } from '@angular/core';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'cvapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cvprojectapp';

  constructor(public darkModeService: DarkmodeService){

  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
