import { ProductreturnModule } from './productreturn.module';


describe('ProductreturnModule', () => {
  let productreturnModule: ProductreturnModule;

  beforeEach(() => {
    productreturnModule = new ProductreturnModule();
  });

  it('should create an instance', () => {
    expect(productreturnModule).toBeTruthy();
  });
});