import { TestBed } from '@angular/core/testing';

import { CallDetailsService } from './call-details.service';

describe('CallDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallDetailsService = TestBed.get(CallDetailsService);
    expect(service).toBeTruthy();
  });
});
