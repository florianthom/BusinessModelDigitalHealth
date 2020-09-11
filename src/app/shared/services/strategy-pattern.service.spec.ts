import { TestBed } from '@angular/core/testing';

import { StrategyPatternService } from './strategy-pattern.service';

describe('StrategyPatternService', () => {
  let service: StrategyPatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategyPatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
