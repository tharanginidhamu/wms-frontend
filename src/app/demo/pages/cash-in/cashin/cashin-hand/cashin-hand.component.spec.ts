import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinHandComponent } from './cashin-hand.component';

describe('CashinHandComponent', () => {
  let component: CashinHandComponent;
  let fixture: ComponentFixture<CashinHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashinHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashinHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
