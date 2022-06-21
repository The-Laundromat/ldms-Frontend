import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SideNavbarService} from "./side-navbar.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: ElementRef | any;

  public sideNavVisibility:boolean = true;

  constructor(private navbarService: SideNavbarService) {
  }

  public ngOnInit(): void {
    this.navbarService.sideNavToggle.subscribe(() => {
      this.toggleSideDrawer();
    })
  }

  private toggleSideDrawer() {
    this.drawer.toggle();
  }

  public onDrawerClose(){
    this.navbarService.toggleSideDrawer();
  }
}
