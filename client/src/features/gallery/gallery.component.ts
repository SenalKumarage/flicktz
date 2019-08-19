import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlicktzImage } from 'src/app/services/image-data.service';

/**
 * This is responsible to display an array of images on a grid
 */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  // Gallery image data
  @Input() public data: FlicktzImage[];

  ngOnChanges(changes: SimpleChanges) {

    // tslint:disable-next-line:no-string-literal
    if (changes['data']) {
      // tslint:disable-next-line:no-string-literal
      this.data = changes['data'].currentValue;
    }
  }

}
