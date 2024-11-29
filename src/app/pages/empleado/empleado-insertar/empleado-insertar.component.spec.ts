import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoInsertarComponent } from './empleado-insertar.component';

describe('EmpleadoInsertarComponent', () => {
  let component: EmpleadoInsertarComponent;
  let fixture: ComponentFixture<EmpleadoInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
