import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setCookie } from 'src/common/helper';
import { ACCESS_TOKEN } from 'src/constants';
import { homeRoute } from '../routes';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    // private logoutService: LogoutService
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleLogout() {
    setCookie(ACCESS_TOKEN, null);
    this.router.navigate([homeRoute]);
  }
}
