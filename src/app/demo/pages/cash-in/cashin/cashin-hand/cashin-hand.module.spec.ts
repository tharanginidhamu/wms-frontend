import { HandModule } from './cashin-hand.module';

describe('SalesModule', () => {
  let handModule: HandModule;

  beforeEach(() => {
    handModule = new HandModule();
  });

  it('should create an instance', () => {
    expect(handModule).toBeTruthy();
  });
});
