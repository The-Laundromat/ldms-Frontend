import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {User} from "../../auth/models/auth.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuBtnIcon = 'menu';
  @Output() sideDrawerToggle = new EventEmitter();


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  getUser(): User | boolean {
    return this.authService.getLoggedInUser();
  }

  onLoginBtnClick() {
    this.router.navigate(['/login'])
  }

  onSideDrawerBtnClick() {
    this.sideDrawerToggle.emit()
    this.menuBtnIcon = this.menuBtnIcon === 'menu' ? 'close' : 'menu'
  }

  onSignOutBtnClick() {
    this.authService.signOut()
  }
}
