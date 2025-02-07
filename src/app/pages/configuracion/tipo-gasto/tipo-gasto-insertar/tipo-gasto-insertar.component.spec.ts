import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGastoInsertarComponent } from './tipo-gasto-insertar.component';

describe('TipoGastoInsertarComponent', () => {
  let component: TipoGastoInsertarComponent;
  let fixture: ComponentFixture<TipoGastoInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoGastoInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGastoInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
