import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {AuthComponent} from "./auth/auth.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {LoginComponent} from "./auth/login/login.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent}
    ]},
  {path: 'user', component: UserComponent},
  {path: '', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
