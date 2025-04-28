import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root', 
})
export class ProjectService {

  private projects: Project[] = [
  {
    id: 'join',
    title: 'Join',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks drag and drop functions, assign users and categories',
    implementDetails: 'Short text...',
    duration: '5 weeks',
    imageUrl: '/assets/img/join-board.jpg',
    route: '/projects/join',
    materials: [
      { name: 'HTML', iconUrl: '/assets/icons/Property1=HTML.png' },
      { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
      { name: 'Firebase', iconUrl: '/assets/icons/Property1=Firebase.png' },
      { name: 'Angular', iconUrl: '/assets/icons/Property1=Angular.png' },
      { name: 'TypeScript', iconUrl: '/assets/icons/Property1=Ts.png' },
    ]
  },
  {
    id: 'elpollo',
    title: 'El Pollo Loco',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    implementDetails: 'Short text...',
    duration: '5 weeks',
    imageUrl: '/assets/img/elpollo.jpg',
    route: '/projects/elpollo', 
            materials: [
      { name: 'HTML', iconUrl: '/assets/icons/Property1=HTML.png' },
      { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
      { name: 'JavaScript', iconUrl: '/assets/icons/Property1=Js.png' },
    ]
  },
    {
    id: 'dabubble',
    title: 'DABubble',
    description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    implementDetails: 'Short text...',
    duration: '5 weeks',
    imageUrl: '/assets/img/dabubble.jpg',
    route: '/projects/dabubble',
            materials: [
      { name: 'HTML', iconUrl: '/assets/icons/html.svg' },
      { name: 'CSS', iconUrl: '/assets/icons/css.svg' },
      { name: 'JavaScript', iconUrl: '/assets/icons/js.svg' },
    ]
  },
];

  getProjects(): Project[] {
    return this.projects;
  }


  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}