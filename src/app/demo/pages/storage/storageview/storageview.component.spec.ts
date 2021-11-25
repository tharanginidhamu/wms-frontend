import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageviewComponent } from './storageview.component';

describe('StorageviewComponent', () => {
  let component: StorageviewComponent;
  let fixture: ComponentFixture<StorageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
