import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponenteComponent } from './alumnos-componente.component';

describe('AlumnosComponenteComponent', () => {
  let component: AlumnosComponenteComponent;
  let fixture: ComponentFixture<AlumnosComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
