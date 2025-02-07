import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGastoListadoComponent } from './tipo-gasto-listado.component';

describe('TipoGastoListadoComponent', () => {
  let component: TipoGastoListadoComponent;
  let fixture: ComponentFixture<TipoGastoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoGastoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGastoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
