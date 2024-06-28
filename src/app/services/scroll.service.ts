import { Injectable } from '@angular/core';
// import { InfoCardComponent } from '../info-card/info-card.component';
import { ProjectsCardComponent } from '../projects-card/projects-card.component';
import { CvComponentComponent } from '../cv-component/cv-component.component';
import { ContactComponent } from '../contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private projectComponentTarget: ProjectsCardComponent | undefined;
  private cvComponentTarget: CvComponentComponent | undefined;
  private contactComponentTarget: ContactComponent | undefined;

  setProjectsComponentTarget(target: ProjectsCardComponent) {
    this.projectComponentTarget = target;
  }

  setCVComponentTarget(target: CvComponentComponent) {
    this.cvComponentTarget = target;
  }

  setContactComponentTarget(target: ContactComponent) {
    this.contactComponentTarget = target;
  }

  getProjectsComponentTarget(): ProjectsCardComponent | undefined {
    return this.projectComponentTarget;
  }

  getCVComponentTarget(): CvComponentComponent | undefined {
    return this.cvComponentTarget;
  }

  getContactComponentTarget(): ContactComponent | undefined {
    return this.contactComponentTarget;
  }
}
