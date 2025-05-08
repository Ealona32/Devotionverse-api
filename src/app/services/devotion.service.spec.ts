import { TestBed } from '@angular/core/testing';

import { DevotionService } from './devotion.service';

describe('DevotionService', () => {
  let service: DevotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
