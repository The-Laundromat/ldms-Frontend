import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReportsAndAnalysisRoutingModule} from "./reports-and-analysis-routing.module";
import {ReportsAndAnalysisComponent} from "./reports-and-analysis.component";

@NgModule({
  imports: [
    CommonModule,
    ReportsAndAnalysisRoutingModule
  ],
  declarations: [ReportsAndAnalysisComponent],
  exports: [ReportsAndAnalysisComponent]
})
export class ReportsAndAnalysisModule {

}
