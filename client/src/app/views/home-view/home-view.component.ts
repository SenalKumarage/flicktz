import { Component, OnInit } from '@angular/core';
import { ImageDataService } from 'src/app/services/image-data.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private imageService: ImageDataService) { }

  ngOnInit() {

    this.imageService.getPublicFeed()
      .subscribe(r => {
        console.log(typeof r);
      });
  }

}
