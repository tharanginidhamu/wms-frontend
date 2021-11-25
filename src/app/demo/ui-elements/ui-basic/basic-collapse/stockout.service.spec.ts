import { TestBed } from '@angular/core/testing';

import { StockoutService } from './stockout.service';

describe('StockoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockoutService = TestBed.get(StockoutService);
    expect(service).toBeTruthy();
  });
});
