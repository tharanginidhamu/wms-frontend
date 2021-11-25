import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerhistorydetailsComponent } from './customerhistorydetails.component';

describe('CustomerhistorydetailsComponent', () => {
  let component: CustomerhistorydetailsComponent;
  let fixture: ComponentFixture<CustomerhistorydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerhistorydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerhistorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
