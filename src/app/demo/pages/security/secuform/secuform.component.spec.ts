import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuformComponent } from './secuform.component';

describe('SecuformComponent', () => {
  let component: SecuformComponent;
  let fixture: ComponentFixture<SecuformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
