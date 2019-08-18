import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlicktzImage } from 'src/app/services/image-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  @Input() public data: FlicktzImage[];

  ngOnChanges(changes: SimpleChanges) {

    if (changes['data']) {
        this.data = changes['data'].currentValue;

        console.log(this.data);
    }
  }

}
