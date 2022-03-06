import {EventEmitter, Injectable} from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SideNavbarService {
  sideNavStatus: boolean;
  sideNavToggle = new EventEmitter<boolean>();
  sideNavAuth = new Subject<boolean>();
  sideNavAuthStatus: boolean;


  constructor(private authService: AuthService) {
    this.sideNavStatus = false;
    this.sideNavAuthStatus = !!authService.getLoggedInUser()

    this.authService.authChangeEvent.subscribe(user => {
      if (user) {
        this.sideNavAuth.next(true)
      } else {
        this.sideNavStatus = false;
        this.sideNavAuthStatus = false;
        this.sideNavAuth.next(false)
      }
    })
  }

  toggleSideDrawer() {
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggle.emit(this.sideNavStatus);
  }

}
