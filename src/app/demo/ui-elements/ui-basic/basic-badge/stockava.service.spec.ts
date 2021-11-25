import { TestBed } from '@angular/core/testing';

import { StockavaService } from './stockava.service';

describe('StockavaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockavaService = TestBed.get(StockavaService);
    expect(service).toBeTruthy();
  });
});
