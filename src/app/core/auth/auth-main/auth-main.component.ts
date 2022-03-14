import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.css']
})
export class AuthMainComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.getLoggedInUser()){
      this.router.navigate(['/user'])
    }else{
      this.router.navigate(['/login'])
    }
  }

}
