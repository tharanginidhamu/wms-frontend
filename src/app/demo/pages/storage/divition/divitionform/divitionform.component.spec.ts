import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivitionformComponent } from './divitionform.component';

describe('DivitionformComponent', () => {
  let component: DivitionformComponent;
  let fixture: ComponentFixture<DivitionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivitionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivitionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
