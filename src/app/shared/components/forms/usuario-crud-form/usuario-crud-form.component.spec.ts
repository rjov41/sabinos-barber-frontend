import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCrudFormComponent } from './usuario-crud-form.component';

describe('UsuarioCrudFormComponent', () => {
  let component: UsuarioCrudFormComponent;
  let fixture: ComponentFixture<UsuarioCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
