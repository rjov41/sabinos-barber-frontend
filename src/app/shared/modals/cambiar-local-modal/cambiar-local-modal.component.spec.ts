import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarLocalModalComponent } from './cambiar-local-modal.component';

describe('CambiarLocalModalComponent', () => {
  let component: CambiarLocalModalComponent;
  let fixture: ComponentFixture<CambiarLocalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarLocalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarLocalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
