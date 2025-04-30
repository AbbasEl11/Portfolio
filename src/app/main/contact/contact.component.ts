import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MailSendedComponent } from '../mail-sended/mail-sended.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;

  privacyError = false;
  submitted = false;
  editingName = false;
  editingEmail = false;
  editingMessage = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-zäöüÄÖÜß\\s-]*$'),
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  onAttemptSend(): void {
    if (!this.myForm.get('privacy')?.value) {
      this.privacyError = true;
    } else {
      this.privacyError = false;
      this.onSubmit();
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.sendMail(formData);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

private sendMail(data: any): void {
  const formData = {
    name: data.name,
    email: data.email, 
    message: data.message
  };

  this.http.post('https://abbas-el-mahmoud.com/sendMail.php', formData, {
    responseType: 'text'
  }).subscribe({
    next: () => {
      this.myForm.reset();
      this.submitted = false;

      this.dialog.open(MailSendedComponent, {
        width: '400px',
        disableClose: false
      });
    },
    error: (error) => {
      console.error('error:', error);
    }
  });
}

  clearError(controlName: string): void {
    const control = this.myForm.get(controlName);
    if (control?.invalid) {
      control.markAsUntouched();
      control.markAsPristine();
    }
  }

  checkValidity(controlName: string): void {
    const control = this.myForm.get(controlName);
    if (control?.invalid) {
      this.editingName = false;
      this.editingEmail = false;
      this.editingMessage = false;
    }
  }

  startEditingName(): void {
    this.editingName = true;
  }

  startEditingEmail(): void {
    this.editingEmail = true;
  }

  startEditingMessage(): void {
    this.editingMessage = true;
  }
}
