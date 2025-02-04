import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaListadoComponent } from './nomina-listado.component';

describe('NominaListadoComponent', () => {
  let component: NominaListadoComponent;
  let fixture: ComponentFixture<NominaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominaListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
