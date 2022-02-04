import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { setCookie } from 'src/common/helper';
import { ACCESS_TOKEN } from 'src/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
  ) { }

  email = new FormControl('');
  password = new FormControl('');

  handleLogin () {
    this.loginService.login({
      email: this.email.value,
      password: this.password.value,  
    }).subscribe({
      next: (data: any) => {
        setCookie(ACCESS_TOKEN, data.accessToken);
        this.router.navigate(['profile']);
      },
      error: (error) => {
        alert(error.error.message);
      }
    });
  }

  ngOnInit(): void {
  }

}
