import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaInsertarComponent } from './factura-insertar.component';

describe('FacturaInsertarComponent', () => {
  let component: FacturaInsertarComponent;
  let fixture: ComponentFixture<FacturaInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
