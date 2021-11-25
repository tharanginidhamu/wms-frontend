import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBankComponent } from './loanaccount.component';

describe('CashinBankComponent', () => {
  let component: LoanBankComponent;
  let fixture: ComponentFixture<LoanBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
