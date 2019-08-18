import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() public searchImages: EventEmitter<string> = new EventEmitter<string>();

  public searchForm;

  constructor( private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      text: ''
    });
  }

  onSubmit(searchData) {

    let searchTags = searchData.text.split(' ');

    this.searchImages.emit(searchTags.toString());
  }
}
