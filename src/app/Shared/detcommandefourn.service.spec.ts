import { TestBed } from '@angular/core/testing';

import { DetcommandefournService } from './detcommandefourn.service';

describe('DetcommandefournService', () => {
  let service: DetcommandefournService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetcommandefournService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
