import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required)
  })

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.authChangeEvent.subscribe(value => {
      if (value) {
        this.router.navigate(['/user'])
      }
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.loginUsingBasicCredentials(loginData.email, loginData.password);
    } else {
      this.loginForm.updateValueAndValidity()
    }
  }
}
