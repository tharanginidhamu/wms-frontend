import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductreturnComponent } from './productreturn.component';

describe('ProductreturnComponent', () => {
  let component: ProductreturnComponent;
  let fixture: ComponentFixture<ProductreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
