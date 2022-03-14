import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from "./core/intro/intro.component";
import {AuthComponent} from "./core/auth/auth.component";
import {ForgotPasswordComponent} from "./core/auth/forgot-password/forgot-password.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {UserComponent} from "./epics/user/user.component";
import {GeneralDetailComponent} from "./epics/user/branches/general-detail/general-detail.component";
import {ActivityHistoryComponent} from "./epics/user/branches/activity-history/activity-history.component";
import {LoginDetailComponent} from "./epics/user/branches/login-detail/login-detail.component";
import {AppSettingsComponent} from "./epics/user/branches/app-settings/app-settings.component";
import {AuthMainComponent} from "./core/auth/auth-main/auth-main.component";

const routes: Routes = [
  {
    path: 'login', component: AuthComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent}
    ]
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: '',
    component: AuthMainComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        children: [
          {path: 'general-detail', component: GeneralDetailComponent},
          {path: 'activity-history', component: ActivityHistoryComponent},
          {path: 'login-detail', component: LoginDetailComponent},
          {path: 'app-settings', component: AppSettingsComponent}
        ]
      }
    ]
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
