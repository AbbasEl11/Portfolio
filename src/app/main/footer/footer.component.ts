import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [RouterModule,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
constructor(private scroller: ViewportScroller) {}

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
