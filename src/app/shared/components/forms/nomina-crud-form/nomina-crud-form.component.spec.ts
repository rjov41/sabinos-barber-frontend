import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaCrudFormComponent } from './nomina-crud-form.component';

describe('NominaCrudFormComponent', () => {
  let component: NominaCrudFormComponent;
  let fixture: ComponentFixture<NominaCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominaCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominaCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
