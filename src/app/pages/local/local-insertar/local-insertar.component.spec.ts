import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalInsertarComponent } from './local-insertar.component';

describe('LocalInsertarComponent', () => {
  let component: LocalInsertarComponent;
  let fixture: ComponentFixture<LocalInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
