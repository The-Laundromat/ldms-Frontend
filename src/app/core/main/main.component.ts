import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-main',
  template: `
    <app-side-navbar>
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </app-side-navbar>
  `
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }
}
