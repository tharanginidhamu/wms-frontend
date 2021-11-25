import { MonthlysalesModule } from './monthlysales.module';

describe('MonthlysalesModule', () => {
  let monthlysalesModule: MonthlysalesModule;

  beforeEach(() => {
    monthlysalesModule = new MonthlysalesModule();
  });

  it('should create an instance', () => {
    expect(monthlysalesModule).toBeTruthy();
  });
});