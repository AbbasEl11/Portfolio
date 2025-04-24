import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpolloComponent } from './elpollo.component';

describe('ElpolloComponent', () => {
  let component: ElpolloComponent;
  let fixture: ComponentFixture<ElpolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElpolloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElpolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
