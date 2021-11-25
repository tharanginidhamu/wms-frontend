import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlysalesComponent } from './monthlysales.component';

describe('MonthlysalesComponent', () => {
  let component: MonthlysalesComponent;
  let fixture: ComponentFixture<MonthlysalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlysalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
