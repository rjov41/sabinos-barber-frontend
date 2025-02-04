import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoEditarComponent } from './gasto-editar.component';

describe('GastoEditarComponent', () => {
  let component: GastoEditarComponent;
  let fixture: ComponentFixture<GastoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastoEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
