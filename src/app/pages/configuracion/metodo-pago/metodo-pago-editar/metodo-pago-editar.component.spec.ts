import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPagoEditarComponent } from './metodo-pago-editar.component';

describe('MetodoPagoEditarComponent', () => {
  let component: MetodoPagoEditarComponent;
  let fixture: ComponentFixture<MetodoPagoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodoPagoEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoPagoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
