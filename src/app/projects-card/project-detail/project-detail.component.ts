import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'cvapp-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  nrOfImages: number = 0; // Initialize nrOfImages with 0 initially

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private supabaseService:SupabaseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = +(params.get('id') ?? 0); // Get the id from the route parameters and convert it to a number
          return this.supabaseService.getProjectById(id);
        })
      )
      .subscribe(project => {
        // Convert latestupdate to a Date object if it exists
        if (project && project.latestupdate) {
          this.project = {
            ...project,
            latestUpdate: new Date(project.latestupdate) // Convert string to Date object
          };
        } else {
          this.project = project;
        }
  
        console.log("Project:", this.project);
        this.nrOfImages = this.project?.images?.length || 0; // Update nrOfImages inside the subscribe callback
      });
  }

  pageChanged(event: any): void {
    // Handle page change logic here
    console.log('Page changed event:', event);
    
    // Check if the event's pageIndex is within bounds of images array
    if (event.pageIndex >= 0 && event.pageIndex < this.project.images.length) {
      this.project.image = this.project.images[event.pageIndex];
    } else {
      console.error('Invalid page index:', event.pageIndex);
    }
  }


}
