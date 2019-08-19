import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

/**
 * This will emit the user's search ter by separating tags from commas
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() public searchImages: EventEmitter<string> = new EventEmitter<string>();

  public searchForm;

  constructor(private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      text: ''
    });
  }

  public onSubmit(searchData) {

    const searchTags = searchData.text.split(' ');

    this.searchImages.emit(searchTags.toString());
  }
}
