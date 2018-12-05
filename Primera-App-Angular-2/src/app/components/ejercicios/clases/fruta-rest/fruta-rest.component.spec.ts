import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaRESTComponent } from './fruta-rest.component';

describe('FrutaRESTComponent', () => {
  let component: FrutaRESTComponent;
  let fixture: ComponentFixture<FrutaRESTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaRESTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaRESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
