import {Router, RouterModule, Routes} from "@angular/router";
import {GeneralDetailComponent} from "./branches/general-detail/general-detail.component";
import {ActivityHistoryComponent} from "./branches/activity-history/activity-history.component";
import {LoginDetailComponent} from "./branches/login-detail/login-detail.component";
import {AppSettingsComponent} from "./branches/app-settings/app-settings.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'general-detail', component: GeneralDetailComponent},
  {path: 'activity-history', component: ActivityHistoryComponent},
  {path: 'login-detail', component: LoginDetailComponent},
  {path: 'app-settings', component: AppSettingsComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UserRoutingModule{}
