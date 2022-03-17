import {EventEmitter, Injectable} from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class SideNavbarService {
  sideNavStatus: boolean;
  sideNavToggle = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {
    this.sideNavStatus = false;
    authService.authChangeEvent.subscribe((value) => {
      !value ? this.sideNavStatus = value : null;
    })
  }

  toggleSideDrawer() {
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggle.emit(this.sideNavStatus);
  }

}
