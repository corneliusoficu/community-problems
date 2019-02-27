import { TestBed } from '@angular/core/testing';

import { ProblemsServiceService } from './problems-service.service';

describe('ProblemsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemsServiceService = TestBed.get(ProblemsServiceService);
    expect(service).toBeTruthy();
  });
});
