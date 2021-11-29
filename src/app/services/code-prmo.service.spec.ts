import { TestBed } from '@angular/core/testing';

import { CodePrmoService } from './code-prmo.service';

describe('CodePrmoService', () => {
  let service: CodePrmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodePrmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
