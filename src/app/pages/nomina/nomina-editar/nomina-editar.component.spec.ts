import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaEditarComponent } from './nomina-editar.component';

describe('NominaEditarComponent', () => {
  let component: NominaEditarComponent;
  let fixture: ComponentFixture<NominaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominaEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
