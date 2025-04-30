import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ProjectDetailsComponent } from './main/project-details/project-details.component';
import { LegalNoticeComponent } from './main/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './main/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
