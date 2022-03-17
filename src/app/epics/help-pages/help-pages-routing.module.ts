import {RouterModule, Routes} from "@angular/router";
import {HelpPagesComponent} from "./help-pages.component";
import {NgModule} from "@angular/core";

const routes:Routes = [{
  path:'',
  component:HelpPagesComponent
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class HelpPagesRoutingModule{

}
