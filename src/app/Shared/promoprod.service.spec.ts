import { TestBed } from '@angular/core/testing';

import { PromoprodService } from './promoprod.service';

describe('PromoprodService', () => {
  let service: PromoprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
