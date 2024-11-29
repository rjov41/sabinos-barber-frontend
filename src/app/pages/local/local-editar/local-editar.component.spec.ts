import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalEditarComponent } from './local-editar.component';

describe('LocalEditarComponent', () => {
  let component: LocalEditarComponent;
  let fixture: ComponentFixture<LocalEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
