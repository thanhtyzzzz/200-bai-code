import { TestBed } from '@angular/core/testing';

import { ListPublicApisService } from './list-public-apis.service';

describe('ListPublicApisService', () => {
  let service: ListPublicApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPublicApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
