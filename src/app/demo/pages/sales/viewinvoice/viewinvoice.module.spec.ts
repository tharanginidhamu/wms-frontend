import { ViewinvoiceModule } from './viewinvoice.module';

describe('ViewinvoiceModule', () => {
  let viewinvoiceModule: ViewinvoiceModule;

  beforeEach(() => {
    viewinvoiceModule = new ViewinvoiceModule();
  });

  it('should create an instance', () => {
    expect(viewinvoiceModule).toBeTruthy();
  });
});