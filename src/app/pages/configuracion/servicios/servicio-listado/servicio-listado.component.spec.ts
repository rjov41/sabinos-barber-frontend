import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioListadoComponent } from './servicio-listado.component';

describe('ServicioListadoComponent', () => {
  let component: ServicioListadoComponent;
  let fixture: ComponentFixture<ServicioListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
