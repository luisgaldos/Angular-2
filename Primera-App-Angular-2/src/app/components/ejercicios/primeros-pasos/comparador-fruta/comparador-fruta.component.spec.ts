import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorFrutaComponent } from './comparador-fruta.component';

describe('ComparadorFrutaComponent', () => {
  let component: ComparadorFrutaComponent;
  let fixture: ComponentFixture<ComparadorFrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparadorFrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparadorFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
