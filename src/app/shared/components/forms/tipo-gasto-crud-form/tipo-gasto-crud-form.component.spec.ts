import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGastoCrudFormComponent } from './tipo-gasto-crud-form.component';

describe('TipoGastoCrudFormComponent', () => {
  let component: TipoGastoCrudFormComponent;
  let fixture: ComponentFixture<TipoGastoCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoGastoCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGastoCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
