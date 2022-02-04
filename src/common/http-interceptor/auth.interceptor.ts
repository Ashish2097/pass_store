import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

/**
 * Adding accesstoken to request header
 * */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  headers = new Headers();


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    if (!authToken) {
      // TODO: return to login form except for login request
    }

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({ setHeaders: {Authorization: 'Bearer ' + authToken}});
    console.log(authReq);

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
