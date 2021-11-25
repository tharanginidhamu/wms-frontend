import { CashinModule } from './cashin.module';

describe('FinanceModule', () => {
  let cashinModule: CashinModule;

  beforeEach(() => {
    cashinModule = new CashinModule();
  });

  it('should create an instance', () => {
    expect(cashinModule).toBeTruthy();
  });
});