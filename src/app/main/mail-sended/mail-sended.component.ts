import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-mail-sended',
  imports: [MatIconModule,MatDialogModule,MatButtonModule,TranslateModule],
  templateUrl: './mail-sended.component.html',
  styleUrl: './mail-sended.component.scss'
})
export class MailSendedComponent {
  constructor(private dialogRef: MatDialogRef<MailSendedComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
