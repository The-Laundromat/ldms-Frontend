import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./core/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanLoad{

  constructor(private authService:AuthService, private router:Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.getLoggedInUser()){
      return true;
    }else {
      return this.router.navigate(['/']);
    }
  }
}
