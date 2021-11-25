import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecevingPCComponent } from './receving-pc.component';

describe('RecevingPCComponent', () => {
  let component: RecevingPCComponent;
  let fixture: ComponentFixture<RecevingPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecevingPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecevingPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
