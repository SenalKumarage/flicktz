import { Component, OnInit } from '@angular/core';
import { ImageDataService, FlicktzImage } from 'src/app/services/image-data.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public imageData: FlicktzImage[];

  public isLoading = false;

  constructor(private imageService: ImageDataService) { }

  ngOnInit() {

    this.isLoading = true;

    this.imageService.getPublicFeed()
      .subscribe(r => {

        this.isLoading = false;
        this.imageData = r;
      });
  }

  public onSearchImages(ev) {

    this.isLoading = true;

    this.imageService.search(ev)
    .subscribe(r => {

      this.isLoading = false;
      this.imageData = r;
    });
  }

}
