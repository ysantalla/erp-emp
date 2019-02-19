import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

    if (true) {
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (true) {
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }
}
