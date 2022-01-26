import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  constructor() { }

  email = new FormControl('');
  password = new FormControl('');

  handleLogin () {
    // api to login
  }

  ngOnInit(): void {
  }

}
