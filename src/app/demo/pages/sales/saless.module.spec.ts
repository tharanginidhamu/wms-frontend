import { SalessModule } from './saless.module';

describe('SalessModule', () => {
  let salessModule: SalessModule;

  beforeEach(() => {
    salessModule = new SalessModule();
  });

  it('should create an instance', () => {
    expect(salessModule).toBeTruthy();
  });
});