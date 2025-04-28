import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';


@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

    constructor(private scrollService: ScrollService){}
  
      scrollTo(sectionId: string) {
      this.scrollService.scrollTo(sectionId);
    }
}
