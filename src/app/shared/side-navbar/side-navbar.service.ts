import {EventEmitter, Injectable} from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SideNavbarService {
  sideNavStatus: boolean;
  sideNavToggle = new EventEmitter<boolean>();

  constructor() {
    this.sideNavStatus = false;
  }

  toggleSideDrawer() {
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggle.emit(this.sideNavStatus);
  }

}
