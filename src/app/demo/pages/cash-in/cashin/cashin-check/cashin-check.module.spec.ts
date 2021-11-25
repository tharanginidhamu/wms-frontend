import { ChequeModule } from './cashin-check.module';

describe('SalesModule', () => {
  let chequeModule: ChequeModule;

  beforeEach(() => {
    chequeModule = new ChequeModule();
  });

  it('should create an instance', () => {
    expect(chequeModule).toBeTruthy();
  });
});
