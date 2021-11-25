import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReportbyPartyComponent } from './item-reportby-party.component';

describe('ItemReportbyPartyComponent', () => {
  let component: ItemReportbyPartyComponent;
  let fixture: ComponentFixture<ItemReportbyPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReportbyPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReportbyPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
