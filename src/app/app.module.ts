import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {IntroComponent} from './core/intro/intro.component';
import {SlideshowComponent} from './core/intro/slideshow/slideshow.component';
import {AuthComponent} from './core/auth/auth.component';
import {LoginComponent} from './core/auth/login/login.component';
import {ForgotPasswordComponent} from './core/auth/forgot-password/forgot-password.component';
import {UserComponent} from './epics/user/user.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { UserNavbarComponent } from './epics/user/shared/user-navbar/user-navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GeneralDetailComponent } from './epics/user/branches/general-detail/general-detail.component';
import { ActivityHistoryComponent } from './epics/user/branches/activity-history/activity-history.component';
import { LoginDetailComponent } from './epics/user/branches/login-detail/login-detail.component';
import { AppSettingsComponent } from './epics/user/branches/app-settings/app-settings.component';
import { AuthMainComponent } from './core/auth/auth-main/auth-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    SlideshowComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserComponent,
    SideNavbarComponent,
    UserNavbarComponent,
    GeneralDetailComponent,
    ActivityHistoryComponent,
    LoginDetailComponent,
    AppSettingsComponent,
    AuthMainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
