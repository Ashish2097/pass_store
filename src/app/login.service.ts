import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: { email: string; password: string; }) {
    const url = "/auth/login";
    console.log(body);
    // console.log(environment.baseUrl + url, body);
    return this.http.post(url, body);
    // return this.http.get(url);
  }
}
