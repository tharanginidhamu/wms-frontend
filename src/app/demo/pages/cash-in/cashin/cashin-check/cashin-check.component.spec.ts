import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinCheckComponent } from './cashin-check.component';

describe('CashinCheckComponent', () => {
  let component: CashinCheckComponent;
  let fixture: ComponentFixture<CashinCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashinCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashinCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
