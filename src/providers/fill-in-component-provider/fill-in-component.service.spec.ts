import { TestBed, inject } from '@angular/core/testing';

import { FillInComponentService } from './fill-in-component.service';

describe('FillInComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FillInComponentService]
    });
  });

  it('should be created', inject([FillInComponentService], (service: FillInComponentService) => {
    expect(service).toBeTruthy();
  }));
});
