import { CustomerhistoryModule } from './customerhistory.module';

describe('CustomerhistoryModule', () => {
  let customerhistoryModule: CustomerhistoryModule;

  beforeEach(() => {
    customerhistoryModule = new CustomerhistoryModule();
  });

  it('should create an instance', () => {
    expect(customerhistoryModule).toBeTruthy();
    
  });
});