import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {IntroComponent} from './intro/intro.component';
import {SlideshowComponent} from './intro/slideshow/slideshow.component';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {AccountComponent} from './user/account/account.component';
import {UserComponent} from './user/user.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { UserNavbarComponent } from './user/shared/user-navbar/user-navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    SlideshowComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AccountComponent,
    UserComponent,
    SideNavbarComponent,
    UserNavbarComponent
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
