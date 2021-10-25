import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LanguageDetectionService} from "../../services/language-detection.service";
import {Language} from "../../model";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string
  languages: Language[]
  includeClean: boolean
  textInputForm: FormGroup

  constructor(private languageDetectionService: LanguageDetectionService, private formBuilder: FormBuilder) {
    this.text = ''
    this.languages = []
    this.includeClean = false
    this.textInputForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  onIncludeConfidence(): void {
    this.includeClean = !this.includeClean
  }

  getPercent(confidence: number): number {
    return Math.round(confidence * 100)
  }

  detectLanguage(): void {
    this.languageDetectionService.detectLanguageClean(this.textInputForm.get('text')?.value, this.includeClean).subscribe((languageDetectionResponse) => {
      this.textInputForm.reset()
      this.languages = languageDetectionResponse.detectedLangs
    })
  }
}
