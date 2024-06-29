import { Component, ElementRef, OnInit } from '@angular/core';
import { Project } from './project';
import { Router } from '@angular/router';
import { ProjectService } from './services/project.service';


@Component({
  selector: 'cvapp-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router, private projectService:ProjectService) {}

  ngOnInit(): void {
    this.refreshProjectList();
  }

  scrollToView() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // setTimeout(() => {
    //   window.scrollBy(0, -1);
    // }, 300); 
  }

  //displayedColumns: string[] = ['id', 'title', 'maintag','latestUpdate'];
  displayedColumns: string[] = ['id', 'title','latestUpdate'];
  // dataSource = ELEMENT_DATA;

  projectList=this.projectService.getAllProjects();

  navigateToProject(projectId: number) {
    this.router.navigate(['/home/project', projectId]);
  }

  sortByOption: string = '';

  randomizeProjects():void{
    for (let i = this.projectList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.projectList[i], this.projectList[j]] = [this.projectList[j], this.projectList[i]];
    }
    this.projectList = [...this.projectList]; 
  }

  sortProjects(): void {
    if (this.sortByOption === 'option0') {
      // Sort by id
      this.projectList.sort((a, b) => a.id - b.id);
    }else if (this.sortByOption === 'option1') {
      // Sort by newest first
      this.projectList.sort((a, b) => b.latestUpdate.getTime() - a.latestUpdate.getTime());
    } else if (this.sortByOption === 'option2') {
      // Sort by oldest first
      this.projectList.sort((a, b) => a.latestUpdate.getTime() - b.latestUpdate.getTime());
    }

    // Ensure Angular detects the change
    this.projectList = [...this.projectList]; // Trigger change detection by creating a new array
  }

  private refreshProjectList(): void {
    this.projectList = this.projectService.getAllProjects(); // Assuming getAllProjects() fetches data
  }

  isOdd(index: number): boolean {
    return index % 2 === 0; // Returns true for odd indexes (0-based)
  }

}
