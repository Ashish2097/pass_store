import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PasswordListComponent } from './password-list/password-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPortalComponent,
  },
  {
    path: 'profile',
    component: PasswordListComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
