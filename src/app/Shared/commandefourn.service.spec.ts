import { TestBed } from '@angular/core/testing';

import { CommandefournService } from './commandefourn.service';

describe('CommandefournService', () => {
  let service: CommandefournService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandefournService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
