import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelpPagesComponent} from "./help-pages.component";
import {HelpPagesRoutingModule} from "./help-pages-routing.module";



@NgModule({
  imports: [
    CommonModule,
    HelpPagesRoutingModule
  ],
  declarations: [HelpPagesComponent],
  exports:[HelpPagesComponent]
})
export class HelpPagesModule { }
