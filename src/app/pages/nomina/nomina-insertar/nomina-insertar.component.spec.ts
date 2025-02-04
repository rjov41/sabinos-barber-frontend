import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaInsertarComponent } from './nomina-insertar.component';

describe('NominaInsertarComponent', () => {
  let component: NominaInsertarComponent;
  let fixture: ComponentFixture<NominaInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominaInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominaInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
