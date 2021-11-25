import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnproductformComponent } from './returnproductform.component';

describe('ReturnproductformComponent', () => {
  let component: ReturnproductformComponent;
  let fixture: ComponentFixture<ReturnproductformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnproductformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnproductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
