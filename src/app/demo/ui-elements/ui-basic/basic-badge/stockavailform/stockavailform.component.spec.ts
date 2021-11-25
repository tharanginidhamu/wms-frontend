import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockavailformComponent } from './stockavailform.component';

describe('StockavailformComponent', () => {
  let component: StockavailformComponent;
  let fixture: ComponentFixture<StockavailformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockavailformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockavailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
