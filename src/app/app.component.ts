import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ldms-frontend';

  toggleSideDrawer(sideNav: any) {
    sideNav.drawer.toggle();
  }
}
