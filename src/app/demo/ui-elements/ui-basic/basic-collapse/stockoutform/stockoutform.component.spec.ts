import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutformComponent } from './stockoutform.component';

describe('StockoutformComponent', () => {
  let component: StockoutformComponent;
  let fixture: ComponentFixture<StockoutformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockoutformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
