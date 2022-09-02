import { TestBed } from '@angular/core/testing';

import { TransfertstockService } from './transfertstock.service';

describe('TransfertstockService', () => {
  let service: TransfertstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfertstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
