import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN } from 'src/constants';
import { getCookie } from '../helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const accessToken = getCookie(ACCESS_TOKEN);

    // TODO: a better way to check if user is authorised
    if (!accessToken) {
      return this.router.createUrlTree(['/']);
    }
    return true;
  }
}
