import { TestBed } from '@angular/core/testing';

import { imageService } from './image.service';

describe('FileUploadService', () => {
  let service: imageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(imageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
