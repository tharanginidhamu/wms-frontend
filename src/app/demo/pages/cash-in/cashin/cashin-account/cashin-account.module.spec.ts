import { AccountModule } from './cashin-account.module';

describe('SalesModule', () => {
  let accountModule: AccountModule;

  beforeEach(() => {
    accountModule = new AccountModule();
  });

  it('should create an instance', () => {
    expect(accountModule).toBeTruthy();
  });
});
