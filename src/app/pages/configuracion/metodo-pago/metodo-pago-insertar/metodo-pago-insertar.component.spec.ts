import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPagoInsertarComponent } from './metodo-pago-insertar.component';

describe('MetodoPagoInsertarComponent', () => {
  let component: MetodoPagoInsertarComponent;
  let fixture: ComponentFixture<MetodoPagoInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodoPagoInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoPagoInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
