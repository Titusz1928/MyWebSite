import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
//import { InfoCardComponent } from '../info-card/info-card.component';
import { ProjectsCardComponent } from '../projects-card/projects-card.component';
import { Router } from '@angular/router';
import { CvComponentComponent } from '../cv-component/cv-component.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'cvapp-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent {
  constructor(private router: Router, private scrollService: ScrollService) { }

  scrollToProjectsComponent() {
    this.router.navigate(['/home']);
        const target = this.scrollService.getProjectsComponentTarget();
        if (target instanceof ProjectsCardComponent) {
          target.scrollToView();
        } else {
          console.error("Project component target not found or not an instance of ProjectsCardComponent");
        }
  }

  scrollToCVComponent() {
    this.router.navigate(['/home']);
        const target = this.scrollService.getCVComponentTarget();
        if (target instanceof CvComponentComponent) {
          target.scrollToView();
        } else {
          console.error("CV component target not found or not an instance of CvComponentComponent");
        }
  }

  scrollToContactComponent() {
    this.router.navigate(['/home']);
        const target = this.scrollService.getContactComponentTarget();
        if (target instanceof ContactComponent) {
          target.scrollToView();
        } else {
          console.error("Contact component target not found or not an instance of ContactComponent");
        }
  }
}
