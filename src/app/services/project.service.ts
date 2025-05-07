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
    description: 'PROJECT_DETAILS.JOIN.DESCRIPTION',
    implementDetails: 'PROJECT_DETAILS.JOIN.IMPLEMENTDETAILS',
    duration: 'PROJECT_DETAILS.JOIN.DURATION',
    imageUrl: '/assets/img/join-board.jpg',
    route: '/projects/join',
    gitHubUrl: 'https://github.com/leo-rullani/join',
    liveTestUrl: 'http://abbas-el-mahmoud.com/join/html/login.html',
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
    description: 'PROJECT_DETAILS.ELPOLLOLOCO.DESCRIPTION',
    implementDetails: 'PROJECT_DETAILS.ELPOLLOLOCO.IMPLEMENTDETAILS',
    duration: 'PROJECT_DETAILS.ELPOLLOLOCO.DURATION',
    imageUrl: '/assets/img/elpollo.jpg',
    route: '/projects/elpollo', 
    gitHubUrl: 'https://github.com/AbbasEl11/El-Pollo-Loco',
    liveTestUrl: 'http://abbas-el-mahmoud.com/elpolloloco/index.html',
    materials: [
      { name: 'HTML', iconUrl: '/assets/icons/Property1=HTML.png' },
      { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
      { name: 'JavaScript', iconUrl: '/assets/icons/Property1=Js.png' },
    ]
  },
    {
    id: 'dabubble',
    title: 'DABubble',
    description: 'PROJECT_DETAILS.DABUBBLE.DESCRIPTION',
    implementDetails: 'PROJECT_DETAILS.DABUBBLE.IMPLEMENTDETAILS',
    duration: 'PROJECT_DETAILS.DABUBBLE.DURATION',
    imageUrl: '/assets/img/dabubble.jpg',
    route: '/projects/dabubble',
    gitHubUrl: 'https://github.com/AbbasEl11/dabubble',
    liveTestUrl: 'http://abbas-el-mahmoud.com/dabubble/index.html',
    materials: [
      { name: 'HTML', iconUrl: '/assets/icons/Property1=HTML.png' },
      { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
      { name: 'JavaScript', iconUrl: '/assets/icons/Property1=Js.png' },
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