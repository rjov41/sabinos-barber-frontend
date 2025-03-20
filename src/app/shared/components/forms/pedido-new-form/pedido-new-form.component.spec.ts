import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoNewFormComponent } from './pedido-new-form.component';

describe('PedidoNewFormComponent', () => {
  let component: PedidoNewFormComponent;
  let fixture: ComponentFixture<PedidoNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoNewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
