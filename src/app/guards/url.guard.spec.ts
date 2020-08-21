import { TestBed } from '@angular/core/testing';

import { UrlGuard } from './url.guard';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterStub } from '../test-utils/router.mock';
import { RouteMock } from '../test-utils/route.mock';
import { StorageService } from '../services/storage.service';
import { of } from 'rxjs';

describe('UrlGuard', () => {
  let guard: UrlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        },
        {
          provide: ActivatedRouteSnapshot,
          useValue: RouteMock
        },
        {
          provide: RouterStateSnapshot,
          useValue: {}
        },
        StorageService
      ]
    });
    guard = TestBed.inject(UrlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true on activation', () => {

    const route = TestBed.get(ActivatedRouteSnapshot);
    const snapShot = TestBed.get(RouterStateSnapshot);

    expect(guard.canActivate(route, snapShot)).toBe(true);

  });

});
