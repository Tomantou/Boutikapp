import { TestBed } from '@angular/core/testing';

import { CommandeclService } from './commandecl.service';

describe('CommandeclService', () => {
  let service: CommandeclService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeclService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
