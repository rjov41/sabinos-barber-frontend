import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoCrudFormComponent } from './gasto-crud-form.component';

describe('GastoCrudFormComponent', () => {
  let component: GastoCrudFormComponent;
  let fixture: ComponentFixture<GastoCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastoCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
