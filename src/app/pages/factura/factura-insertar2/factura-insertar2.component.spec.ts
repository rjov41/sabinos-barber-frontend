import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaInsertar2Component } from './factura-insertar2.component';

describe('FacturaInsertar2Component', () => {
  let component: FacturaInsertar2Component;
  let fixture: ComponentFixture<FacturaInsertar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaInsertar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaInsertar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
