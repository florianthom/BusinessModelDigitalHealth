import { TestBed } from '@angular/core/testing';

import { CanvasSharedDataService } from './canvas-shared-data.service';

describe('CanvasSharedDataService', () => {
  let service: CanvasSharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasSharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
