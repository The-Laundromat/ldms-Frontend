import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user-routing.module";
import {UserNavbarComponent} from "./shared/user-navbar/user-navbar.component";
import {GeneralDetailComponent} from "./branches/general-detail/general-detail.component";
import {ActivityHistoryComponent} from "./branches/activity-history/activity-history.component";
import {LoginDetailComponent} from "./branches/login-detail/login-detail.component";
import {AppSettingsComponent} from "./branches/app-settings/app-settings.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports:[
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations:[
    UserComponent,
    UserNavbarComponent,
    GeneralDetailComponent,
    ActivityHistoryComponent,
    LoginDetailComponent,
    AppSettingsComponent,
  ],
  exports:[UserComponent]
})

export class UserModule{}
