import { TestBed, inject } from '@angular/core/testing';

import { SolarService } from './solar.service';

describe('SolarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolarService]
    });
  });

  it('should be created', inject([SolarService], (service: SolarService) => {
    expect(service).toBeTruthy();
  }));
});
