import { TestBed, inject } from '@angular/core/testing';

import { SybmDemoService } from './sybm-demo.service';

describe('SybmDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SybmDemoService]
    });
  });

  it('should be created', inject([SybmDemoService], (service: SybmDemoService) => {
    expect(service).toBeTruthy();
  }));
});
