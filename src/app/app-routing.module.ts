import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from "./core/intro/intro.component";
import {AuthComponent} from "./core/auth/auth.component";
import {ForgotPasswordComponent} from "./core/auth/forgot-password/forgot-password.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {UserComponent} from "./core/user/user.component";
import {GeneralDetailComponent} from "./core/user/pages/general-detail/general-detail.component";
import {ActivityHistoryComponent} from "./core/user/pages/activity-history/activity-history.component";
import {LoginDetailComponent} from "./core/user/pages/login-detail/login-detail.component";
import {AppSettingsComponent} from "./core/user/pages/app-settings/app-settings.component";

const routes: Routes = [
  {
    path: 'login', component: AuthComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent}
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children:[
      {path: 'general-detail', component: GeneralDetailComponent},
      {path: 'activity-history', component: ActivityHistoryComponent},
      {path: 'login-detail', component: LoginDetailComponent},
      {path: 'app-settings', component: AppSettingsComponent}
    ]
  },
  {path: '**', redirectTo: '/'},
  {path: '', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
