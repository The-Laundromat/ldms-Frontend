import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
