import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptorderComponent } from './receiptorder.component';

describe('ReceiptorderComponent', () => {
  let component: ReceiptorderComponent;
  let fixture: ComponentFixture<ReceiptorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
