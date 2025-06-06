import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-legal-notice',
  imports: [MatDialogModule,MatCardModule,TranslateModule,FooterComponent,RouterModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
