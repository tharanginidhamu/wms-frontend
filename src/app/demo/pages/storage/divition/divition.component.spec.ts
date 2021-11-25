import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivitionComponent } from './divition.component';

describe('DivitionComponent', () => {
  let component: DivitionComponent;
  let fixture: ComponentFixture<DivitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
