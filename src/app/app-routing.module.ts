import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from "./core/intro/intro.component";
import {AuthComponent} from "./core/auth/auth.component";
import {ForgotPasswordComponent} from "./core/auth/forgot-password/forgot-password.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {UserComponent} from "./epics/user/user.component";
import {MainComponent} from "./core/main/main.component";
import {HelpPagesComponent} from "./epics/help-pages/help-pages.component";
import {ReportsAndAnalysisComponent} from "./epics/reports-and-analysis/reports-and-analysis.component";
import {MainGuard} from "./core/main/main.guard";

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    children: [
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
    component: MainComponent,
    canActivate: [MainGuard],
    children: [
      {
        path: 'user',
        component: UserComponent,
        loadChildren:()=>import('./epics/user/user.module').then(m=>m.UserModule)
      },
      {
        path: 'help-pages',
        component: HelpPagesComponent,
        loadChildren: () => import('./epics/help-pages/help-pages.module').then(m => m.HelpPagesModule)
      },
      {
        path: 'reports-and-analysis',
        component: ReportsAndAnalysisComponent,
        loadChildren: () => import('./epics/reports-and-analysis/reports-and-analysis.module').then(m => m.ReportsAndAnalysisModule)
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
