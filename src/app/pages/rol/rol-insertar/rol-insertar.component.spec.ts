import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolInsertarComponent } from './rol-insertar.component';

describe('RolInsertarComponent', () => {
  let component: RolInsertarComponent;
  let fixture: ComponentFixture<RolInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
