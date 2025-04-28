import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TranslateModule],
  templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  
}
