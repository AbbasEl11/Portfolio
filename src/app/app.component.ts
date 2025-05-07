import { Component } from '@angular/core';
import { RouterOutlet,NavigationEnd,Router  } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TranslateModule],
  templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      });
  }
  
}
