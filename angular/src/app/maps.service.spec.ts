import { TestBed } from '@angular/core/testing';

import { MapsService } from './maps/maps.service';

describe('MapsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsService = TestBed.get(MapsService);
    expect(service).toBeTruthy();
  });
});
