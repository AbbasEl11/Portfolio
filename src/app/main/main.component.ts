import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent,AboutmeComponent,SkillsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
