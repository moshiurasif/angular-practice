import { TestBed } from '@angular/core/testing';

import { ApiloadService } from './apiload.service';

describe('ApiloadService', () => {
  let service: ApiloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
