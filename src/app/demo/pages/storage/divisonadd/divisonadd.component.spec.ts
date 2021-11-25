import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisonaddComponent } from './divisonadd.component';

describe('DivisonaddComponent', () => {
  let component: DivisonaddComponent;
  let fixture: ComponentFixture<DivisonaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisonaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisonaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
