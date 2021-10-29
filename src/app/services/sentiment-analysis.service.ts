import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SentimentAnalysisResponse} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.dandelionApi

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  sentimentAnalysis(text: string): Observable<SentimentAnalysisResponse> {
    this.historyService.recordApiCall(Date.now(), 'GET', `${this.apiUrl}/sent/v1/?text=${text}&token=${localStorage.getItem('token')}`)
    return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/sent/v1/?text=${text}&token=${localStorage.getItem('token')}`)
  }

  sentimentAnalysisLang(text: string, lang: string): Observable<SentimentAnalysisResponse> {
    this.historyService.recordApiCall(Date.now(), 'GET', `${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${localStorage.getItem('token')}`)
    return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${localStorage.getItem('token')}`)
  }
}
