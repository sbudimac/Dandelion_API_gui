import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string
  score: number
  type: string
  lan: string
  includeLan: boolean
  textInputForm: FormGroup

  constructor(private sentimentAnalysisService: SentimentAnalysisService, private formBuilder: FormBuilder) {
    this.text = ''
    this.score = -1
    this.type = ''
    this.lan = ''
    this.includeLan = false
    this.textInputForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onIncludeLan(): void {
    this.includeLan = !this.includeLan
  }

  sentimentAnalysis():void {
    if (!this.includeLan) {
      this.sentimentAnalysisService.sentimentAnalysis(this.textInputForm.get('text')?.value).subscribe((sentimentAnalysisResponse => {
        this.text = this.textInputForm.get('text')?.value
        this.textInputForm.reset()
        this.score = sentimentAnalysisResponse.sentiment.score
        this.type = sentimentAnalysisResponse.sentiment.type
      }))
    } else {
      this.sentimentAnalysisService.sentimentAnalysisLang(this.textInputForm.get('text')?.value, this.lan).subscribe((sentimentAnalysisResponse => {
        this.text = this.textInputForm.get('text')?.value
        this.textInputForm.reset()
        this.score = sentimentAnalysisResponse.sentiment.score
        this.type = sentimentAnalysisResponse.sentiment.type
      }))
    }

  }
}
