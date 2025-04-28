import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../../models/scroll.service';


@Component({
  selector: 'app-aboutme',
  imports: [TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  constructor(private scrollService: ScrollService){}

    scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }

}
