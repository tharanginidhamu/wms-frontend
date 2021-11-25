import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFileComponent } from './note-file.component';

describe('NoteFileComponent', () => {
  let component: NoteFileComponent;
  let fixture: ComponentFixture<NoteFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
