import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarLocalFormComponent } from './cambiar-local-form.component';

describe('CambiarLocalFormComponent', () => {
  let component: CambiarLocalFormComponent;
  let fixture: ComponentFixture<CambiarLocalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarLocalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarLocalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
