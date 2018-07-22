import { TestBed, inject } from '@angular/core/testing';

import { CardStorageService } from './card-storage.service';

describe('CardStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardStorageService]
    });
  });

  it('should be created', inject([CardStorageService], (service: CardStorageService) => {
    expect(service).toBeTruthy();
  }));
});
