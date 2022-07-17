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
import {RetailOperationsComponent} from "./epics/retail-operations/retail-operations.component";

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
        title: 'LDMS - User',
        path: 'user',
        component: UserComponent,
        loadChildren: () => import('./epics/user/user.module').then(m => m.UserModule)
      },
      {
        title: 'LDMS - Help',
        path: 'help-pages',
        component: HelpPagesComponent,
        loadChildren: () => import('./epics/help-pages/help-pages.module').then(m => m.HelpPagesModule)
      },
      {
        title: 'LDMS - Reports & Analysis',
        path: 'reports-and-analysis',
        component: ReportsAndAnalysisComponent,
        loadChildren: () => import('./epics/reports-and-analysis/reports-and-analysis.module').then(m => m.ReportsAndAnalysisModule)
      },
      {
        title: 'LDMS - Retail Operations',
        path: 'retail-operations',
        component: RetailOperationsComponent,
        loadChildren: () => import('./epics/retail-operations/retail-operations.module').then(m => m.RetailOperationsModule)
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
