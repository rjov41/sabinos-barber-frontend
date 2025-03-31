import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioInsertarComponent } from './servicio-insertar.component';

describe('ServicioInsertarComponent', () => {
  let component: ServicioInsertarComponent;
  let fixture: ComponentFixture<ServicioInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
