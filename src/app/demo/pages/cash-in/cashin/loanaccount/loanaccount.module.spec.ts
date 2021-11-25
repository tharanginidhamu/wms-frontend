import { LoanModule } from './loanaccount.module';

describe('SalesModule', () => {
  let loanModule: LoanModule;

  beforeEach(() => {
    loanModule = new LoanModule();
  });

  it('should create an instance', () => {
    expect(loanModule).toBeTruthy();
  });
});
