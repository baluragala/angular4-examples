import { TestBed, inject } from '@angular/core/testing';
import { AuthorizeGaurdService } from './authorize-gaurd.service';

describe('AuthorizeGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizeGaurdService]
    });
  });

  it('should ...', inject([AuthorizeGaurdService], (service: AuthorizeGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
