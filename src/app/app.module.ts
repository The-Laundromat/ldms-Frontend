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
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthMainComponent } from './core/auth/auth-main/auth-main.component';
import { DropdownMenuComponent } from './shared/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    SlideshowComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SideNavbarComponent,
    AuthMainComponent,
    DropdownMenuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
