import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturarClienteModalComponent } from './facturar-cliente-modal.component';

describe('FacturarClienteModalComponent', () => {
  let component: FacturarClienteModalComponent;
  let fixture: ComponentFixture<FacturarClienteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturarClienteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturarClienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
