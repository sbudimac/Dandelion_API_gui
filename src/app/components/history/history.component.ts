import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";
import {HistoryItem} from "../../model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems: HistoryItem[]

  constructor(private historyService: HistoryService) {
    this.historyItems = historyService.getHistory()
  }

  ngOnInit(): void {
  }

  getTimestampFormat(timestamp: number): string {
    return '[' + formatDate(timestamp, 'dd.mm.yyyy. hh:mm:ss', 'en_US') + ']';
  }

  getHistoryItem(historyItem: HistoryItem): string {
    return this.getTimestampFormat(historyItem.timestamp) + ' ' + historyItem.method + ' ' + historyItem.url
  }
}
