import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http: HttpClient;
  constructor(private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  login(body: { email: string; password: string; }) {
    const url = "/auth/login";
    return this.http.post(url, body);
  }
}
