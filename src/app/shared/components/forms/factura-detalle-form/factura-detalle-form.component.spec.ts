import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDetalleFormComponent } from './factura-detalle-form.component';

describe('FacturaDetalleFormComponent', () => {
  let component: FacturaDetalleFormComponent;
  let fixture: ComponentFixture<FacturaDetalleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaDetalleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaDetalleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
