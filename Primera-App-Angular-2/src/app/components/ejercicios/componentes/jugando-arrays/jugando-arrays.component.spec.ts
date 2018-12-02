import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugandoArraysComponent } from './jugando-arrays.component';

describe('JugandoArraysComponent', () => {
  let component: JugandoArraysComponent;
  let fixture: ComponentFixture<JugandoArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugandoArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugandoArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
