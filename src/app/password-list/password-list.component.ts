import { Component, OnInit } from '@angular/core';
import { CredService, UserCreds } from '../cred.service';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.scss'],
})
export class PasswordListComponent implements OnInit {
  creds: { domain: string; password: string; username: string }[] | undefined;
  email: string | undefined;

  constructor(
    private credService: CredService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.credService.fetchAllCreds().subscribe({
      next: (data) => this.populateCreds(data),
      error: (error) => this.errorHandlerService.handleError(error),
    });
  }

  populateCreds(data: UserCreds) {
    this.creds = data.pass;
    this.email = data.email;
  }
}
