import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecevingRFComponent } from './receving-rf.component';

describe('RecevingRFComponent', () => {
  let component: RecevingRFComponent;
  let fixture: ComponentFixture<RecevingRFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecevingRFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecevingRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
