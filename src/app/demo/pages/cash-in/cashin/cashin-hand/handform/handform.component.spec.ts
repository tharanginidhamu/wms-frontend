import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandformComponent } from './handform.component';

describe('HandformComponent', () => {
  let component: HandformComponent;
  let fixture: ComponentFixture<HandformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
