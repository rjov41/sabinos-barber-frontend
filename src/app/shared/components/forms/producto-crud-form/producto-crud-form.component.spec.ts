import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrudFormComponent } from './producto-crud-form.component';

describe('ProductoCrudFormComponent', () => {
  let component: ProductoCrudFormComponent;
  let fixture: ComponentFixture<ProductoCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
