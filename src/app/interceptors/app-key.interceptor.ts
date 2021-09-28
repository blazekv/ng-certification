import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AppKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const transformedRequest = request.url.startsWith(environment.apiUrl)
      ? request.clone({ setParams: { appid: environment.appId } })
      : request;
    return next.handle(transformedRequest);
  }
}
