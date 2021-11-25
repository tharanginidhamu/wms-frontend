import { expensiveModule } from './expence.module';

describe('TblBootstrapModule', () => {
  let ExpensiveModule: expensiveModule;

  beforeEach(() => {
    ExpensiveModule = new expensiveModule();
  });

  it('should create an instance', () => {
    expect(ExpensiveModule).toBeTruthy();
  });
});
