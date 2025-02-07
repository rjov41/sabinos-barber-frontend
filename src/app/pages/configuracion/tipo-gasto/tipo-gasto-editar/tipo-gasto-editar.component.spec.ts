import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGastoEditarComponent } from './tipo-gasto-editar.component';

describe('TipoGastoEditarComponent', () => {
  let component: TipoGastoEditarComponent;
  let fixture: ComponentFixture<TipoGastoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoGastoEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGastoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
