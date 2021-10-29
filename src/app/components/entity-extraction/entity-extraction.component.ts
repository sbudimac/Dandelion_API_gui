import { Component, OnInit } from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";
import {Annotation} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string
  minConfidence: number
  entities: Annotation[]
  includeMinConfidence: boolean
  includes: boolean[]
  includeValues: string[]
  textInputForm: FormGroup;

  constructor(private entityExtraionService: EntityExtractionService, private formBuilder: FormBuilder) {
    this.text = ''
    this.minConfidence = 0.6
    this.entities = []
    this.includeMinConfidence = false
    this.includes = [false, false, false]
    this.includeValues = ['image', 'abstract', 'categories']
    this.textInputForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  noEntities(): boolean {
    return this.entities.length == 0;

  }

  onIncludeMinConfidence(): void {
    this.includeMinConfidence = !this.includeMinConfidence
  }

  onCheckImage(): void {
    this.includes[0] = !this.includes[0]
  }

  onCheckAbstract(): void {
    this.includes[1] = !this.includes[1]
  }

  onCheckCategories(): void {
    this.includes[2] = !this.includes[2]
  }

  includeParameters(): boolean {
    for (let i = 0; i < this.includes.length; i++) {
      if (this.includes[i]) {
        return true
      }
    }
    return false
  }

  getIncludeParameters(): string {
    let parameters: string = ''
    for (let i = 0; i < this.includes.length; i++) {
      if (this.includes[i]) {
        parameters += this.includeValues[i]
        parameters += ','
      }
    }
    parameters = parameters.slice(0, -1)
    return parameters
  }

  getEntities(): void {
    if (!this.includeMinConfidence && !this.includeParameters()) {
      this.entityExtraionService.getEntities(this.textInputForm.get('text')?.value).subscribe((entitieResponse) => {
        this.text = this.textInputForm.get('text')?.value
        this.textInputForm.reset()
        this.entities = entitieResponse.annotations
      })
    } else if (this.includeMinConfidence && !this.includeParameters()) {
      this.entityExtraionService.getEntitiesMinConfidence(this.textInputForm.get('text')?.value, this.minConfidence).subscribe((entitieResponse) => {
        this.text = this.textInputForm.get('text')?.value
        this.textInputForm.reset()
        this.entities = entitieResponse.annotations
      })
    } else if (!this.includeMinConfidence && this.includeParameters()) {
      this.entityExtraionService.getEntitiesIncludes(this.textInputForm.get('text')?.value, this.getIncludeParameters()).subscribe((entitieResponse) => {
        this.text = this.textInputForm.get('text')?.value
        this.textInputForm.reset()
        this.entities = entitieResponse.annotations
      })
    } else {
      this.entityExtraionService.getEntitiesFull(this.textInputForm.get('text')?.value, this.minConfidence, this.getIncludeParameters()).subscribe((entitieResponse) => {
        this.text = this.textInputForm.get('text')?.value
        this.textInputForm.reset()
        this.entities = entitieResponse.annotations
      })
    }
  }
}
