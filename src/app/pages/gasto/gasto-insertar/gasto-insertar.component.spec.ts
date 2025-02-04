import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoInsertarComponent } from './gasto-insertar.component';

describe('GastoInsertarComponent', () => {
  let component: GastoInsertarComponent;
  let fixture: ComponentFixture<GastoInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastoInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
