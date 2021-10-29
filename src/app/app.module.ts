import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import {HttpClientModule} from "@angular/common/http";
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
