import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageDataService, FlicktzImage } from 'src/app/services/image-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, OnDestroy {

  /**
   * Image data return from the service
   */
  public imageData: FlicktzImage[];

  /**
   * Pre loader
   */
  public isLoading = false;

  // Observable subscriptions
  private publicFeedSubscription: Subscription;
  private searchSubscription: Subscription;

  constructor(private imageService: ImageDataService) { }

  ngOnInit() {

    this.isLoading = true;

    // Initially loading the public feed from the api
    this.publicFeedSubscription = this.imageService.getPublicFeed()
      .subscribe(r => {

        this.isLoading = false;
        this.imageData = r;
      });
  }

  /**
   * This will get called when the user submit search term
   * and will fetch the data from the service
   * @param ev Comma separated search string
   */
  public onSearchImages(ev) {

    this.isLoading = true;

    this.searchSubscription = this.imageService.search(ev)
      .subscribe(r => {

        this.isLoading = false;
        this.imageData = r;
      });
  }

  public ngOnDestroy(): void {

    if (this.publicFeedSubscription) {

      this.publicFeedSubscription.unsubscribe();
    }

    if (this.searchSubscription) {

      this.searchSubscription.unsubscribe();
    }

  }

}
