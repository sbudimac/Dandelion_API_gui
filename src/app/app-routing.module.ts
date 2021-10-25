import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "configuration",
    component: ConfigurationComponent
  },
  {
    path: "entityExtraction",
    component: EntityExtractionComponent
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
