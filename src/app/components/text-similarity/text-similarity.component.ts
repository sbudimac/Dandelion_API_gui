import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string
  text2: string
  similarity: number
  textInputForm: FormGroup

  constructor(private textSimilarityService: TextSimilarityService, private formBuilder: FormBuilder) {
    this.text1 = ''
    this.text2 = ''
    this.similarity = -1
    this.textInputForm = this.formBuilder.group({
      text1: ['', [Validators.required, Validators.minLength(3)]],
      text2: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  getPercent(): number {
    return Math.round(this.similarity * 100)
  }

  compareTexts(): void {
    this.textSimilarityService.compareTexts(this.textInputForm.get('text1')?.value, this.textInputForm.get('text2')?.value).subscribe((textSimilarityResponse) => {
      this.textInputForm.reset()
      this.similarity = textSimilarityResponse.similarity
    })
  }
}
