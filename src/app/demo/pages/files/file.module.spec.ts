import { FilesModule } from './file.module';

describe('FinanceModule', () => {
  let filesModule: FilesModule;

  beforeEach(() => {
    filesModule = new FilesModule();
  });

  it('should create an instance', () => {
    expect(filesModule).toBeTruthy();
  });
});