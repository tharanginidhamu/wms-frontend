import { NoteModule } from './notes.module';

describe('FinanceModule', () => {
  let notesModule: NoteModule;

  beforeEach(() => {
    notesModule = new NoteModule();
  });

  it('should create an instance', () => {
    expect(notesModule).toBeTruthy();
  });
});