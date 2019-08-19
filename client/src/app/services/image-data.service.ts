import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * This is responsible for all the image data from the server
 */
@Injectable()
export class ImageDataService {

  constructor(private http: HttpClient) {
  }

  /**
   * This will return the public feed of the flickr api
   * It will return an array of FlicktzImage
   */
  public getPublicFeed(): Observable<FlicktzImage[]> {

    return this.http.get<any[]>(`api/public-feed`);
  }

  /**
   * This will search photos from flickr api by passing several tags
   * @param tags Comma separated string
   */
  public search(tags: string): Observable<FlicktzImage[]> {

    if(tags && tags !== '') {
      const url = `api/search?text=${tags}`;

      return this.http.get<any[]>(url);
    } else {

      return this.getPublicFeed();
    }

  }

}

export interface FlicktzImage {

  // Image url for the full screen mode
  fullImage: string;

  // Image url to view in the grid
  thumbnail: string;
}
