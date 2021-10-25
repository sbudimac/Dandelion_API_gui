import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguageDetectionResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.dandelionApi

  constructor(private httpClient: HttpClient) { }

  detectLanguage(text: string): Observable<LanguageDetectionResponse> {
    return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrl}/li/v1/?text=${text}&token=${localStorage.getItem('token')}`)
  }

  detectLanguageClean(text: string, clean: boolean): Observable<LanguageDetectionResponse> {
    return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrl}/li/v1/?text=${text}&clean=${clean}&token=${localStorage.getItem('token')}`)
  }
}
