import { Injectable } from '@angular/core';
import {HistoryItem} from "../model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyItems: HistoryItem[]

  constructor() {
    this.historyItems = []
  }

  recordApiCall(timestamp: number, method: string, url: string): void {
    let newItem: HistoryItem = {timestamp, method, url}
    this.historyItems.push(newItem)
  }

  getHistory(): HistoryItem[] {
    return this.historyItems
  }
}
