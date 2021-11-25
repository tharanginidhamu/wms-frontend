import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailReportComponent } from './itemdetail-report.component';

describe('ItemdetailReportComponent', () => {
  let component: ItemdetailReportComponent;
  let fixture: ComponentFixture<ItemdetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
