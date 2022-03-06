import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SideNavbarService} from "./side-navbar.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: ElementRef | any;
  sideNavVisibility:boolean;

  constructor(private navbarService: SideNavbarService) {
    this.sideNavVisibility = navbarService.sideNavAuthStatus;
  }

  ngOnInit(): void {
    this.navbarService.sideNavToggle.subscribe(() => {
      this.toggleSideDrawer();
    })

    this.navbarService.sideNavAuth.subscribe(value=>{
      this.sideNavVisibility = value;
    })
  }

  private toggleSideDrawer() {
    this.drawer.toggle();
  }

  drawerCloseBtnOnClick(){
    this.navbarService.toggleSideDrawer();
  }
}
