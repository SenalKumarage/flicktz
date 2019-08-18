import { Component, OnInit } from '@angular/core';
import { ImageDataService, FlicktzImage } from 'src/app/services/image-data.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public imageData: FlicktzImage[];

  constructor(private imageService: ImageDataService) { }

  ngOnInit() {

    this.imageService.getPublicFeed()
      .subscribe(r => {
        this.imageData = r;
      });
  }

}
