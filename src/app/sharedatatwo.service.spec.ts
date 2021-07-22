import { TestBed } from '@angular/core/testing';

import { SharedatatwoService } from './sharedatatwo.service';

describe('SharedatatwoService', () => {
  let service: SharedatatwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedatatwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
