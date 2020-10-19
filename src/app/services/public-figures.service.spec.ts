import { TestBed } from '@angular/core/testing';

import { PublicFiguresService } from './public-figures.service';

describe('PublicFiguresService', () => {
  let service: PublicFiguresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicFiguresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
