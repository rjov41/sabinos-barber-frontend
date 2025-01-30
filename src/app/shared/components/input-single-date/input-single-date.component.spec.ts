import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSingleDateComponent } from './input-single-date.component';

describe('InputSingleDateComponent', () => {
  let component: InputSingleDateComponent;
  let fixture: ComponentFixture<InputSingleDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSingleDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSingleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
