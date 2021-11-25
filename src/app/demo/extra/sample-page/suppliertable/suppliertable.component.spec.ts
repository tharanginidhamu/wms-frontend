import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliertableComponent } from './suppliertable.component';

describe('SuppliertableComponent', () => {
  let component: SuppliertableComponent;
  let fixture: ComponentFixture<SuppliertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
