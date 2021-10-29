import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TextSimilarityResponse} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.dandelionApi

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  compareTexts(text1: string, text2: string): Observable<TextSimilarityResponse> {
    this.historyService.recordApiCall(Date.now(), 'GET', `${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`)
    return this.httpClient.get<TextSimilarityResponse>(`${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`)
  }
}
