import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlicktzImage } from 'src/app/services/image-data.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  public masonryOptions: NgxMasonryOptions = {
		transitionDuration: '0.2s',
		gutter: 20,
		// resize: true,
		// initLayout: true,
    // fitWidth: true,
    // columnWidth: 200,
    // itemSelector: '.grid-item'
	};

  @Input() public data: FlicktzImage[];

  ngOnChanges(changes: SimpleChanges) {

    if (changes['data']) {
        this.data = changes['data'].currentValue;
        console.log(this.data);
    }
  }

}
