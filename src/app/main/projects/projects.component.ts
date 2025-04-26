import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Project } from '../../../models/project.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ElpolloComponent } from './elpollo/elpollo.component';
import { JoinComponent } from './join/join.component';


@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule, RouterModule,CommonModule,MatGridListModule,ElpolloComponent,JoinComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects: Project[] = [
  {
    id: 'join',
    title: 'Join',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks drag and drop functions, assign users and categories',
    imageUrl: '/assets/img/join.png',
    route: '/projects/join'
  },
  {
    id: 'elpollo',
    title: 'El Pollo Loco',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    imageUrl: '/assets/img/elpollo.jpg',
    route: '/projects/elpollo' 
  },
    {
    id: 'dabubble',
    title: 'DABubble',
    description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    imageUrl: '/assets/img/dabubble.jpg',
    route: '/projects/dabubble'
  },
];
project: any;


}
