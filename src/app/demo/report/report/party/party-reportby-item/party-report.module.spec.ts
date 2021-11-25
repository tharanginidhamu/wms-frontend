import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyReportbyItemComponent } from './party-reportby-item.component';

describe('PartyReportbyItemComponent', () => {
  let component: PartyReportbyItemComponent;
  let fixture: ComponentFixture<PartyReportbyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyReportbyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyReportbyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
