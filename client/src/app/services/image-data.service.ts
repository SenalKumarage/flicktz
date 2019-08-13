import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageDataService {

  constructor(private http: HttpClient) {
  }

  public getPublicFeed(): Observable<any> {

    return this.http.get<any[]>(`services/feeds/photos_public.gne?format=json`).pipe(
      map(r => {
        console.log(r);
        return r;
      }));
  }
}
