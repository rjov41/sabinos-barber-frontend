import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCrudFormComponent } from './empleado-crud-form.component';

describe('EmpleadoCrudFormComponent', () => {
  let component: EmpleadoCrudFormComponent;
  let fixture: ComponentFixture<EmpleadoCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
