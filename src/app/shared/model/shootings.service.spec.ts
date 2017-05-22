/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShootingsService } from './shootings.service';

describe('ShootingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShootingsService]
    });
  });

  it('should ...', inject([ShootingsService], (service: ShootingsService) => {
    expect(service).toBeTruthy();
  }));
});
