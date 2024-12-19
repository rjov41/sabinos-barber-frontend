import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPedidoComponent } from './factura-pedido.component';

describe('FacturaPedidoComponent', () => {
  let component: FacturaPedidoComponent;
  let fixture: ComponentFixture<FacturaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
