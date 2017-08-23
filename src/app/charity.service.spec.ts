import { TestBed, inject } from '@angular/core/testing';

import { CharityService } from './charity.service';

describe('CharityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharityService]
    });
  });

  it('should ...', inject([CharityService], (service: CharityService) => {
    expect(service).toBeTruthy();
  }));
});
