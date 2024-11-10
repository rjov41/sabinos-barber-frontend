import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidMessagesFormComponent } from './valid-messages-form.component';

describe('ValidMessagesFormComponent', () => {
  let component: ValidMessagesFormComponent;
  let fixture: ComponentFixture<ValidMessagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidMessagesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidMessagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
