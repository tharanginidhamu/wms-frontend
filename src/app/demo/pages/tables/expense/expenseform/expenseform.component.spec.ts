import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseformComponent } from './expenseform.component';

describe('ExpenseformComponent', () => {
  let component: ExpenseformComponent;
  let fixture: ComponentFixture<ExpenseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
