import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolCrudFormComponent } from './rol-crud-form.component';

describe('RolCrudFormComponent', () => {
  let component: RolCrudFormComponent;
  let fixture: ComponentFixture<RolCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
