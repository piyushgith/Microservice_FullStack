import { TestBed } from '@angular/core/testing';

import { ViewPlanService } from './view-plan.service';

describe('ViewPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewPlanService = TestBed.get(ViewPlanService);
    expect(service).toBeTruthy();
  });
});
