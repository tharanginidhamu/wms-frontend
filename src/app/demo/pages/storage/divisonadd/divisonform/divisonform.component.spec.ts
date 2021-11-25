import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisonformComponent } from './divisonform.component';

describe('DivisonformComponent', () => {
  let component: DivisonformComponent;
  let fixture: ComponentFixture<DivisonformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisonformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
