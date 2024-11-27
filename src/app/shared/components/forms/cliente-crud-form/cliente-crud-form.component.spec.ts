import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCrudFormComponent } from './cliente-crud-form.component';

describe('ClienteCrudFormComponent', () => {
  let component: ClienteCrudFormComponent;
  let fixture: ComponentFixture<ClienteCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
