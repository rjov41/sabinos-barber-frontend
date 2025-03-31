import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCrudFormComponent } from './servicio-crud-form.component';

describe('ServicioCrudFormComponent', () => {
  let component: ServicioCrudFormComponent;
  let fixture: ComponentFixture<ServicioCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
