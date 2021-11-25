import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowstockReportComponent } from './lowstock-report.component';

describe('LowstockReportComponent', () => {
  let component: LowstockReportComponent;
  let fixture: ComponentFixture<LowstockReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowstockReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowstockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
