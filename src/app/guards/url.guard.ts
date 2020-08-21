import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: StorageService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // 1st valid code eyJ2YWxpZCI6dHJ1ZSwicG9rZW1vbiI6IkRyYWdvbml0ZSJ9
      // 2nd valid code eyJ2YWxpZCI6dHJ1ZSwicG9rZW1vbiI6IlN1aWN1bmUifQ==
      const encoded = next.queryParams.pass;
      if (encoded) {
        const decoded = JSON.parse(atob(encoded));
        if (decoded.valid) {
          this.store.setInitialPokemon(decoded.pokemon);
          return true;
        } else {
          this.router.navigate(['wait4it']);
        }
      } else {
        return this.store.pokemon.pipe(
          take(1),
          map(pokemon => !!pokemon),
          map(havePokemon => {
            if (!havePokemon) {
              this.router.navigate(['wait4it']);
              return false;
            }
            return true;
          })
        );
      }
  }

}
