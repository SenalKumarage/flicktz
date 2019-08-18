import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * This will intercept all http request from the application and
 * do things like prepending the base url and handle global headers
 */
@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  private baseUrl = environment.baseUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = req.clone({ url: `${this.baseUrl}${req.url}` });

    return next.handle(apiReq);

  }
}
