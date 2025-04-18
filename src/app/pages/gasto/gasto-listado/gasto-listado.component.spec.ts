import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoListadoComponent } from './gasto-listado.component';

describe('GastoListadoComponent', () => {
  let component: GastoListadoComponent;
  let fixture: ComponentFixture<GastoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
