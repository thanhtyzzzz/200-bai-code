import { TestBed } from '@angular/core/testing';

import { UsDataService } from './us-data.service';

describe('UsDataService', () => {
  let service: UsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
