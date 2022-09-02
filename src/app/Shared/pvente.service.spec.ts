import { TestBed } from '@angular/core/testing';

import { PventeService } from './pvente.service';

describe('PventeService', () => {
  let service: PventeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PventeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
