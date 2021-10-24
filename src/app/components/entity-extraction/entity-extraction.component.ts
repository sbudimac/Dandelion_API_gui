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

  text: string = ''
  entities: Annotation[] = []
  textInputForm: FormGroup;

  constructor(private entityExtraionService: EntityExtractionService, private formBuilder: FormBuilder) {
    this.textInputForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  blankText(): boolean {
    return this.text == '';

  }

  noEntities(): boolean {
    return this.entities.length == 0;

  }

  getEntities(): void {
    this.entityExtraionService.getEntities(this.textInputForm.get('text')?.value).subscribe((entitieResponse) => {
      this.textInputForm.reset()
      this.entities = entitieResponse.annotations
    })
  }

}
