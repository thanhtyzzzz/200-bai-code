import { TestBed } from '@angular/core/testing';

import { PredictGenderService } from './predict-gender.service';

describe('PredictGenderService', () => {
  let service: PredictGenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictGenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
