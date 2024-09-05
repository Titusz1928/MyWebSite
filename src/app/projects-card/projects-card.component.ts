import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'cvapp-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {

  projectList: any[] = []; // Initialize an empty array for project data
  displayedColumns: string[] = ['id', 'title', 'latestUpdate'];
  sortByOption: string = '';

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  ngOnInit(): void {
    this.refreshProjectList();
  }

  scrollToView() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async refreshProjectList() {
    try {
      const projects = await this.supabaseService.getProjects();
  
      // Ensure that latestUpdate is converted to a Date object
      this.projectList = projects.map(project => ({
        ...project,
        latestUpdate: new Date(project.latestupdate), // Convert string to Date object
      }));
  
      console.log('Component projects:', this.projectList);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }
  

  navigateToProject(projectId: number) {
    console.log(projectId);
    this.router.navigate(['/home/project', projectId]);
  }

  randomizeProjects(): void {
    for (let i = this.projectList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.projectList[i], this.projectList[j]] = [this.projectList[j], this.projectList[i]];
    }
    this.projectList = [...this.projectList]; // Trigger change detection
  }

  sortProjects(): void {
    if (this.sortByOption === 'option0') {
      // Sort by id
      this.projectList.sort((a, b) => a.id - b.id);
    } else if (this.sortByOption === 'option1') {
      // Sort by newest first
      this.projectList.sort((a, b) => b.latestUpdate.getTime() - a.latestUpdate.getTime());
    } else if (this.sortByOption === 'option2') {
      // Sort by oldest first
      this.projectList.sort((a, b) => a.latestUpdate.getTime() - b.latestUpdate.getTime());
    }

    this.projectList = [...this.projectList]; // Trigger change detection by creating a new array
  }

  isOdd(index: number): boolean {
    return index % 2 === 0; // Returns true for odd indexes (0-based)
  }
}
