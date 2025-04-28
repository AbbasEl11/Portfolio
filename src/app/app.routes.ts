import { Routes } from '@angular/router';
import { ElpolloComponent } from './main/projects/elpollo/elpollo.component';
import { JoinComponent } from './main/projects/join/join.component';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects/join', component: JoinComponent },  // <- Geändert
  { path: 'projects/elpollo', component: ElpolloComponent }, // <- Geändert
];
