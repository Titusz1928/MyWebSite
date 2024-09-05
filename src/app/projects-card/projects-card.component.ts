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
  projectTagList:any[]=[];
  displayedColumns: string[] = ['id', 'title', 'latestUpdate'];
  sortByOption: string = '';

  maintags: string[] = [];
  tags: string[] = [];

  isTagPanelOpen:Boolean=false;
  selectedTags: Set<string> = new Set();

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

      this.maintags = await this.supabaseService.getUniqueMaintags();
      this.tags = await this.supabaseService.getUniqueTags();
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
      this.projectTagList.sort((a, b) => a.id - b.id);
    } else if (this.sortByOption === 'option1') {
      // Sort by newest first
      this.projectList.sort((a, b) => b.latestUpdate.getTime() - a.latestUpdate.getTime());
      this.projectTagList.sort((a, b) => b.latestUpdate.getTime() - a.latestUpdate.getTime());
    } else if (this.sortByOption === 'option2') {
      // Sort by oldest first
      this.projectList.sort((a, b) => a.latestUpdate.getTime() - b.latestUpdate.getTime());
      this.projectTagList.sort((a, b) => a.latestUpdate.getTime() - b.latestUpdate.getTime());
    }

    this.projectList = [...this.projectList]; // Trigger change detection by creating a new array
    this.projectTagList = [...this.projectTagList];
  }

  isOdd(index: number): boolean {
    return index % 2 === 0; // Returns true for odd indexes (0-based)
  }

  onPanelOpened() {
    this.isTagPanelOpen = true;
  }

  onPanelClosed() {
    this.isTagPanelOpen = false;
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.has(tag);
  }
  
  selectTag(tag: string): void {
    if (this.selectedTags.has(tag)) {
      //delete tag from list
      this.selectedTags.delete(tag);
    } else {
      //add tag to list
      this.selectedTags.add(tag);
    }


    //recalculate which projects should be added to projectTagList ...
    this.updateProjectTagList();

  }

  updateProjectTagList(): void {

      // Filter projects based on selected tags
      this.projectTagList = this.projectList.filter(project =>
        // Check if project has a selected maintag or any of the tags
        this.selectedTags.has(project.maintag) || 
        project.tags.some((tag: string) => this.selectedTags.has(tag))
      );
  }



}
