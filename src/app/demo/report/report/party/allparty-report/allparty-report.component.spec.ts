import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpartyReportComponent } from './allparty-report.component';

describe('AllpartyReportComponent', () => {
  let component: AllpartyReportComponent;
  let fixture: ComponentFixture<AllpartyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpartyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpartyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
