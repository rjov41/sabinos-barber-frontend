import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosListFormComponent } from './filtros-list-form.component';

describe('FiltrosListFormComponent', () => {
  let component: FiltrosListFormComponent;
  let fixture: ComponentFixture<FiltrosListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosListFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
