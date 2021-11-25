import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinAccountComponent } from './cashin-account.component';

describe('CashinAccountComponent', () => {
  let component: CashinAccountComponent;
  let fixture: ComponentFixture<CashinAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashinAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashinAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
