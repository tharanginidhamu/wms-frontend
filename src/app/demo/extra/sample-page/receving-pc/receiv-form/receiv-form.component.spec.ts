import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivFormComponent } from './receiv-form.component';

describe('ReceivFormComponent', () => {
  let component: ReceivFormComponent;
  let fixture: ComponentFixture<ReceivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
