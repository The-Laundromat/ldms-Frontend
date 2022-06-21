import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.getLoggedInUser()){
      void this.router.navigate(['/user'])
    }else{
      void this.router.navigate(['/login'])
    }
  }

}
