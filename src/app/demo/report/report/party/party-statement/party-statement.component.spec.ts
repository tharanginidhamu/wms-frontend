import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyStatementComponent } from './party-statement.component';

describe('PartyStatementComponent', () => {
  let component: PartyStatementComponent;
  let fixture: ComponentFixture<PartyStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
