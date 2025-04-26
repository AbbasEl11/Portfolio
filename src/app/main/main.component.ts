import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterModule,HeroComponent, AboutmeComponent, SkillsComponent, ProjectsComponent, ColleaguesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
