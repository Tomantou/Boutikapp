import { TestBed } from '@angular/core/testing';

import { DetcommandeclService } from './detcommandecl.service';

describe('DetcommandeclService', () => {
  let service: DetcommandeclService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetcommandeclService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
