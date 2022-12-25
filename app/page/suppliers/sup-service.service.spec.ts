import { TestBed } from '@angular/core/testing';

import { SupServiceService } from './sup-service.service';

describe('SupServiceService', () => {
  let service: SupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
