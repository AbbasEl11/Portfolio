import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ProjectDetailsComponent } from './main/project-details/project-details.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent }
];
