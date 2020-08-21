import { TestBed } from '@angular/core/testing';

import { UrlGuard } from './url.guard';
import { Router } from '@angular/router';
import { RouterStub } from '../test-utils/router.mock';

describe('UrlGuard', () => {
  let guard: UrlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        }
      ]
    });
    guard = TestBed.inject(UrlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
