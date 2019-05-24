import { TestBed, inject } from '@angular/core/testing';

import { ReviewComponentService } from './review-component.service';

describe('ReviewComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewComponentService]
    });
  });

  it('should be created', inject([ReviewComponentService], (service: ReviewComponentService) => {
    expect(service).toBeTruthy();
  }));
});
