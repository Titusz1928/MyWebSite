import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { ScrollService } from '../services/scroll.service';
import { ProjectsCardComponent } from '../projects-card/projects-card.component';
import { CvComponentComponent } from '../cv-component/cv-component.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'cvapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(ProjectsCardComponent) projectCard!: ProjectsCardComponent;
  @ViewChild(CvComponentComponent) cvCard!: CvComponentComponent;
  @ViewChild(ContactComponent) contactCard!: ContactComponent;

  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit(): void {
    this.scrollService.setProjectsComponentTarget(this.projectCard);
    this.scrollService.setCVComponentTarget(this.cvCard);
    this.scrollService.setContactComponentTarget(this.contactCard);
  }
}
