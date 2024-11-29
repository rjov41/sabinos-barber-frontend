import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesCrudFormComponent } from './locales-crud-form.component';

describe('LocalesCrudFormComponent', () => {
  let component: LocalesCrudFormComponent;
  let fixture: ComponentFixture<LocalesCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalesCrudFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalesCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
