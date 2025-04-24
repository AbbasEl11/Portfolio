import { Component } from '@angular/core';
import { ElpolloComponent } from './elpollo/elpollo.component';
import { JoinComponent } from './join/join.component';

@Component({
  selector: 'app-projects',
  imports: [ElpolloComponent,JoinComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
