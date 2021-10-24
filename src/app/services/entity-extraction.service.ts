import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityExtractionResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.dandelionApi

  constructor(private httpClient: HttpClient) { }

  getEntities(text: string): Observable<EntityExtractionResponse> {
    return this.httpClient.get<EntityExtractionResponse>(`${this.apiUrl}/nex/v1/?text=${text}&token=${localStorage.getItem('token')}`)
  }
}
