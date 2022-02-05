import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserCreds {
  email: string;
  pass: {
    domain: string;
    password: string;
    username: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class CredService {
  constructor(private http: HttpClient) {}

  fetchAllCreds(): Observable<UserCreds> {
    return this.http.get<UserCreds>('auth/get-passwords');
  }
}
