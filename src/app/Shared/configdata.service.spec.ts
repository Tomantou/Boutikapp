import { TestBed } from '@angular/core/testing';

import { ConfigdataService } from './configdata.service';

describe('ConfigdataService', () => {
  let service: ConfigdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
