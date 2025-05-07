import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
  imports: [MatDialogModule,MatCardModule,CommonModule,TranslateModule,FooterComponent,RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
