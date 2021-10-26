import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SentimentAnalysisResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.dandelionApi

  constructor(private httpClient: HttpClient) { }

  sentimentAnalysis(text: string): Observable<SentimentAnalysisResponse> {
    return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/sent/v1/?text=${text}&token=${localStorage.getItem('token')}`)
  }

  sentimentAnalysisLang(text: string, lang: string): Observable<SentimentAnalysisResponse> {
    return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${localStorage.getItem('token')}`)
  }
}
