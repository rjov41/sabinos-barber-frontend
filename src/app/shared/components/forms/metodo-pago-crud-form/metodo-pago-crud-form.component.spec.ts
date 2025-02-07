import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPagoCrudFormComponent } from './metodo-pago-crud-form.component';

describe('MetodoPagoCrudFormComponent', () => {
  let component: MetodoPagoCrudFormComponent;
  let fixture: ComponentFixture<MetodoPagoCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodoPagoCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoPagoCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
