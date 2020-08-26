import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(private authService: AuthService) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // console.log('canActivate=');
    // console.log(next);
    // console.log(state);

    const result = this.doCanActivate(next, state);

    return result;
  }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // console.log('canActivateChild=');
    // console.log(next);
    // console.log(state);

    const result = this.doCanActivate(next, state);

    return result;
  }






  doCanActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // console.log('doCanActivate=');
    // console.log(next);
    // console.log(state);


    const url = state.url.split('?')[0];
    const queryParams = next.queryParams;

    console.log('doCanActivate');
    console.log(url);
    console.log(queryParams);

    return this.authService.authcheck(url, queryParams);

    // return true;
  }





}
