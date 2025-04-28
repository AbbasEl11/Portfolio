import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ScrollService } from '../../models/scroll.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [RouterModule, HeroComponent, AboutmeComponent, SkillsComponent, ProjectsComponent, ColleaguesComponent, ContactComponent,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
@ViewChildren('aboutMeSection, skillsSection, projectsSection, colleaguesSection, contactSection', { read: ElementRef })
sections!: QueryList<ElementRef>;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
this.scrollService.scrollToSection$.subscribe(sectionName => {
  const section = this.sections.find(s => s.nativeElement.id === sectionName);
  if (section) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
    });
  }
}