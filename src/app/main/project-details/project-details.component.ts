import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, TranslateModule,RouterModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements AfterViewInit {
  project: any;

  @ViewChild('titleRef') titleRef!: ElementRef;
  @ViewChild('lineRef') lineRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id) {
        this.project = this.projectService.getProjectById(id);
        setTimeout(() => {
          this.updateLineWidth();
        }, 0);
      }
    });
  }

  ngAfterViewInit(): void {
    this.updateLineWidth();
  }

  goToNextProject(): void {
    if (!this.project) return;

    let projects = this.projectService.getProjects();
    let currentIndex = projects.findIndex((p: Project) => p.id === this.project?.id);
    let nextIndex = (currentIndex + 1) % projects.length;

    let nextProject = projects[nextIndex];
    this.router.navigate(['/projects', nextProject.id]);
  }

  private updateLineWidth() {
    let titleWidth = this.titleRef.nativeElement.offsetWidth;
    this.lineRef.nativeElement.style.width = `${titleWidth}px`;
    this.lineRef.nativeElement.style.backgroundSize = '100% 20px';
  }
}