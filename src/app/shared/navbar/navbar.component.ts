import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../core/auth/auth.service";
import {SideNavbarService} from "../side-navbar/side-navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menuBtnIcon:boolean;

  constructor(private router: Router, private authService: AuthService, private sideNavBarService: SideNavbarService) {
    this.menuBtnIcon = sideNavBarService.sideNavStatus;
  }

  ngOnInit(): void {
    this.sideNavBarService.sideNavToggle.subscribe(toggleStatus=>{
      this.menuBtnIcon = toggleStatus;
    })
  }

  getAuthUser() {
    return !!this.authService.getLoggedInUser();
  }

  onLoginBtnClick() {
    this.router.navigate(['/login'])
  }

  onSideDrawerBtnClick() {
    this.sideNavBarService.toggleSideDrawer()
    this.menuBtnIcon = this.sideNavBarService.sideNavStatus;
  }

  onSignOutBtnClick() {
    this.authService.signOut()
  }
}
