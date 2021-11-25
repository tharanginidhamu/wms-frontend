import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeformComponent } from './chequeform.component';

describe('ChequeformComponent', () => {
  let component: ChequeformComponent;
  let fixture: ComponentFixture<ChequeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
