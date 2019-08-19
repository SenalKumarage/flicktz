import { Component, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { FlicktzImage } from 'src/app/services/image-data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

/**
 * This is responsible to display an array of images on a grid
 */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  public modalRef: BsModalRef;

  public currentImage: FlicktzImage;

  // Gallery image data
  @Input() public data: FlicktzImage[];

  constructor(private modalService: BsModalService) {}

  ngOnChanges(changes: SimpleChanges) {

    // tslint:disable-next-line:no-string-literal
    if (changes['data']) {
      // tslint:disable-next-line:no-string-literal
      this.data = changes['data'].currentValue;
    }
  }

  public openModal(template: TemplateRef<any>, img: FlicktzImage) {
    this.modalRef = this.modalService.show(template);
    this.currentImage = img;
  }

}
