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
    liveTestUrl: 'https://abbas-el-mahmoud.com/join/html/login.html',
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
    liveTestUrl: 'https://abbas-el-mahmoud.com/elpolloloco/index.html',
    materials: [
      { name: 'HTML', iconUrl: '/assets/icons/Property1=HTML.png' },
      { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
      { name: 'JavaScript', iconUrl: '/assets/icons/Property1=Js.png' },
    ]
    },
    {
    id: 'mygarage',
    title: 'MyGarage App',
    description: 'PROJECT_DETAILS.MYGARAGE.DESCRIPTION',
    implementDetails: 'PROJECT_DETAILS.MYGARAGE.IMPLEMENTDETAILS',
    duration: 'PROJECT_DETAILS.MYGARAGE.DURATION',
    imageUrl: '/assets/img/mygarage.png',
    route: '/projects/mygarage', 
    gitHubUrl: 'https://github.com/AbbasEl11/mygarage-app',
    liveTestUrl: 'https://abbas-el-mahmoud.com/mygarage-app/index.html',
    materials: [
      { name: 'Ionic', iconUrl: '/assets/icons/Ionic_Logo.svg' },
      { name: 'React', iconUrl: '/assets/icons/React.png' },
      { name: 'TypeScript', iconUrl: '/assets/icons/Property1=Ts.png' },
      { name: 'Django', iconUrl: '/assets/icons/django-logo-negative.svg' },
      { name: 'REST-API', iconUrl: '/assets/icons/Property1=Rest-Api.png' },
      { name: 'Python', iconUrl: '/assets/icons/Python-logo-notext.svg' },
      { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
    ]
  },
  //  {
  //  id: 'dabubble',
  //  title: 'DABubble',
  //  description: 'PROJECT_DETAILS.DABUBBLE.DESCRIPTION',
  //  implementDetails: 'PROJECT_DETAILS.DABUBBLE.IMPLEMENTDETAILS',
  //  duration: 'PROJECT_DETAILS.DABUBBLE.DURATION',
  //  imageUrl: '/assets/img/dabubble.jpg',
  //  route: '/projects/dabubble',
  //  gitHubUrl: 'https://github.com/AbbasEl11/dabubble',
  //  liveTestUrl: 'http://abbas-el-mahmoud.com/dabubble/index.html',
  //  materials: [
  //    { name: 'HTML', iconUrl: '/assets/icons/Property1=HTML.png' },
  //    { name: 'CSS', iconUrl: '/assets/icons/Property1=CSS.png' },
  //    { name: 'JavaScript', iconUrl: '/assets/icons/Property1=Js.png' },
  //  ]
  //},
];

  getProjects(): Project[] {
    return this.projects;
  }


  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}