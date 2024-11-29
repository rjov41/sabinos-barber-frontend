import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalListadoComponent } from './local-listado.component';

describe('LocalListComponent', () => {
  let component: LocalListadoComponent;
  let fixture: ComponentFixture<LocalListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalListadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
