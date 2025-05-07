import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-mail-sended',
  imports: [TranslateModule],
  templateUrl: './mail-sended.component.html',
  styleUrl: './mail-sended.component.scss'
})
export class MailSendedComponent implements AfterViewInit, OnDestroy{

  @ViewChild('toast')    toast!: ElementRef<HTMLElement>;
  @ViewChild('progress') progress!: ElementRef<HTMLElement>;
    private timer1!: number;
  private timer2!: number;
  

   ngAfterViewInit(): void {
    this.showNotification();
  }

  private showNotification(): void {
    const t = this.toast.nativeElement;
    const p = this.progress.nativeElement;

    t.classList.add('active');
    p.classList.add('active');

    this.timer1 = window.setTimeout(() => t.classList.remove('active'), 5000);
    this.timer2 = window.setTimeout(() => {
      p.classList.remove('active');
    }, 5300);
  }

  close(): void {
    this.toast.nativeElement.classList.remove('active');
    this.progress.nativeElement.classList.remove('active');
    window.clearTimeout(this.timer1);
    window.clearTimeout(this.timer2);

  }

ngOnDestroy(): void {
  window.clearTimeout(this.timer1);
  window.clearTimeout(this.timer2);
}
}
