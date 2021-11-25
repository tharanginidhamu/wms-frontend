import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementformComponent } from './statementform.component';

describe('StatementformComponent', () => {
  let component: StatementformComponent;
  let fixture: ComponentFixture<StatementformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
