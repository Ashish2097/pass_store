import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  email = new FormControl('');
  password = new FormControl('');

  handleLogin () {
    this.loginService.login({
      email: this.email.value,
      password: this.password.value,  
    }).subscribe(data => {
      console.log(data)
    });
    // api to login
  }

  ngOnInit(): void {
  }

}
