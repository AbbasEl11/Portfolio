import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSendedComponent } from './mail-sended.component';

describe('MailSendedComponent', () => {
  let component: MailSendedComponent;
  let fixture: ComponentFixture<MailSendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
