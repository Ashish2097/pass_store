import { Injectable } from '@angular/core';
import { getCookie } from 'src/common/helper';
import { ACCESS_TOKEN } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthorizationToken() {
    const accessToken = getCookie(ACCESS_TOKEN);
    return accessToken.length ? accessToken : null;
  }
}
