import { OutstandingModule } from './outstanding.module';

describe('OutstandingModule', () => {
  let outstandingModule: OutstandingModule;

  beforeEach(() => {
    outstandingModule = new OutstandingModule();
  });

  it('should create an instance', () => {
    expect(outstandingModule).toBeTruthy();
  });
});