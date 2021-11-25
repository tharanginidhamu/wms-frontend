import { NotefileModule } from './note-file.module';

describe('SalesModule', () => {
  let notefileModule: NotefileModule;

  beforeEach(() => {
    notefileModule = new NotefileModule();
  });

  it('should create an instance', () => {
    expect(notefileModule).toBeTruthy();
  });
});
