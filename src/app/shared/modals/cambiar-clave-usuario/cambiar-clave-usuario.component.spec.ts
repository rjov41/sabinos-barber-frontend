import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarClaveUsuarioComponent } from './cambiar-clave-usuario.component';

describe('CambiarClaveUsuarioComponent', () => {
  let component: CambiarClaveUsuarioComponent;
  let fixture: ComponentFixture<CambiarClaveUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarClaveUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarClaveUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
